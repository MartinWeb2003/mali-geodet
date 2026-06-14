import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export default function Card({ className = '', children }: CardProps) {
  return (
    <div className={`rounded-md border border-[#E0E0E0] bg-[#F7F7F7] p-6 ${className}`}>
      {children}
    </div>
  )
}
