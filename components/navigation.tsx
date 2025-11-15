'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#E8E8E8] border-b border-border z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* ------- LEFT CORNER: LOGO + NAME ------- */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-20 h-20 relative">
              <Image
                src="/clo.png"
                alt="JAY CERAMICS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* <-- FIX APPLIED HERE --> */}
            <span className="text-xl md:text-3xl font-bold tracking-wide text-black">
              JAY CERAMICS
            </span>
          </Link>

          {/* --------- DESKTOP NAVIGATION --------- */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium tracking-wide text-[#333333] hover:text-[#FF7A00] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* -------- DESKTOP CONTACT BUTTON -------- */}
          <div className="hidden sm:flex">
            <Link
              href="/contact"
              className="ml-6 px-8 py-3 bg-[#FF7A00] text-white text-base font-medium tracking-wide hover:bg-[#FF7A00]/90 transition-colors rounded-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* ---------- MOBILE MENU BUTTON ---------- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4 p-2 text-[#333333] hover:text-[#FF7A00]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border transition-all">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-[#333333] hover:text-[#FF7A00] hover:bg-[#D8D8D8] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-4 bg-[#FF7A00] text-white text-base font-medium text-center hover:bg-[#FF7A00]/90 transition-colors rounded-sm"
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
