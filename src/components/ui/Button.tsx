import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md'
  const variants = {
    primary: 'bg-black text-white hover:opacity-80',
    secondary: 'border border-black text-black bg-white hover:bg-black hover:text-white',
    ghost: 'text-black hover:bg-[#F7F7F7]',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
  }
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
