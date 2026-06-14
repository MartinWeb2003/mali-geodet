import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import { useFlashcardStore } from '../store/flashcardStore'
import { useTestStore } from '../store/testStore'
import { Menu } from 'lucide-react'

export default function Layout() {
  const initFlashcards = useFlashcardStore(s => s.init)
  const initTest = useTestStore(s => s.init)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    initFlashcards()
    initTest()
  }, [initFlashcards, initTest])

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 min-h-screen bg-white lg:ml-[240px]">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 border-b border-[#E0E0E0] px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Otvori izbornik"
            className="rounded p-1 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
          >
            <Menu size={20} />
          </button>
          <span className="font-semibold tracking-tight text-[#111111]">Geodezija učenje</span>
        </div>

        <div className="max-w-[1100px] px-4 py-6 sm:px-8 sm:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
