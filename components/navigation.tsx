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
    <nav className="fixed top-0 w-full bg-[#E8E8E8] backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-32 h-20 relative flex-shrink-0">
              <Image
                src="/jay-logo.png"
                alt="JAY CERAMICS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden md:inline text-2xl font-bold tracking-wider text-[#333333]">
              JAY CERAMICS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium tracking-wide text-[#333333] hover:text-[#FF7A00] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#FF7A00] text-white text-base font-medium tracking-wide hover:bg-[#FF7A00]/90 transition-colors duration-300 rounded-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#333333] hover:text-[#FF7A00] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border animate-in fade-in duration-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-[#333333] hover:text-[#FF7A00] hover:bg-[#D8D8D8] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-3 mt-4 bg-[#FF7A00] text-white text-base font-medium text-center hover:bg-[#FF7A00]/90 transition-colors duration-300 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
