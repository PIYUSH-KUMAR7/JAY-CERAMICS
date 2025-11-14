import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-wide mb-4">JAY CERAMICS</h3>
            <p className="text-sm font-light opacity-90 leading-relaxed">
              Transforming spaces with premium tiles and modern designs since established.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4 opacity-75">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="/" className="hover:opacity-75 transition-opacity">Home</Link></li>
              <li><Link href="/products" className="hover:opacity-75 transition-opacity">Products</Link></li>
              <li><Link href="/gallery" className="hover:opacity-75 transition-opacity">Gallery</Link></li>
              <li><Link href="/about" className="hover:opacity-75 transition-opacity">About Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4 opacity-75">Company</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="#" className="hover:opacity-75 transition-opacity">Certifications</Link></li>
              <li><Link href="#" className="hover:opacity-75 transition-opacity">Manufacturing</Link></li>
              <li><Link href="#" className="hover:opacity-75 transition-opacity">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:opacity-75 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4 opacity-75">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91-1234-567-890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@jayceramics.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Industrial Zone, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm font-light opacity-75">
            © {new Date().getFullYear()} JAY CERAMICS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
