import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export default function Textarea({ label, id, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#111111]">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`rounded-md border border-[#E0E0E0] bg-white px-3 py-2 text-sm text-[#111111] placeholder:text-[#555555] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 resize-vertical ${className}`}
        {...props}
      />
    </div>
  )
}
