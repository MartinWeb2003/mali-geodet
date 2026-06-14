import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'muted'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-black text-white',
    success: 'bg-[#1A7A1A] text-white',
    warning: 'border border-black text-black',
    muted: 'bg-[#E0E0E0] text-[#555555]',
  }
  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
