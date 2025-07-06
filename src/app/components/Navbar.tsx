'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white opacity-95 shadow-md fixed top-0 w-full p-4 z-50">
      <div className="max-w-6xl mx-auto  flex justify-between items-center  px-4 py-3">
        <div className="text-xl font-bold text-cyan-500">Dr. Serena Blake</div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-10 ">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-500">
              {item.name}
            </a>
          ))}
        </div>

        {/* Burger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
