import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BookOpen, ClipboardList, FileText, X } from 'lucide-react'

const navItems = [
  { label: 'Početna', to: '/', icon: LayoutDashboard },
  { label: 'Kartice', to: '/kartice', icon: BookOpen },
  { label: 'Provjera znanja', to: '/test', icon: ClipboardList },
  { label: 'Čitaj PDF', to: '/pdf', icon: FileText },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-[240px] bg-[#111111] flex flex-col transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
    >
      <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
        <span className="text-white font-semibold tracking-tight text-base">Geodezija učenje</span>
        <button
          onClick={onClose}
          aria-label="Zatvori izbornik"
          className="lg:hidden rounded p-1 text-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          <X size={16} />
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-white text-black font-medium'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-white/10">
        <span className="text-white/40 text-xs">Luka</span>
      </div>
    </aside>
  )
}
