'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-light text-balance mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Have questions about our tiles? Our team is here to help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-muted border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-light mb-2">Phone</h3>
            <p className="text-muted-foreground font-light mb-1">+91-1234-567-890</p>
            <p className="text-muted-foreground font-light">+91-9876-543-210</p>
          </div>

          <div className="bg-muted border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-light mb-2">Email</h3>
            <p className="text-muted-foreground font-light mb-1">info@jayceramics.com</p>
            <p className="text-muted-foreground font-light">support@jayceramics.com</p>
          </div>

          <div className="bg-muted border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-light mb-2">Address</h3>
            <p className="text-muted-foreground font-light">
              123 Industrial Zone<br />
              City, State 12345
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="slide-up">
            <h2 className="text-2xl font-light mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-light">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-light mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent transition-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent transition-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent transition-ring"
                  placeholder="+91-1234-567-890"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent transition-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-light tracking-wide hover:bg-primary/90 transition-all duration-300 rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Hours */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="slide-up">
              <h2 className="text-2xl font-light mb-4">Visit Our Showroom</h2>
              <div className="bg-muted rounded-lg overflow-hidden border border-border h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-accent mx-auto mb-3" size={32} />
                  <p className="text-muted-foreground font-light">
                    Interactive map will load here
                  </p>
                  <p className="text-sm text-muted-foreground font-light mt-2">
                    123 Industrial Zone, City, State 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary-foreground" size={18} />
                </div>
                <h3 className="text-xl font-light">Business Hours</h3>
              </div>
              <div className="space-y-2 font-light text-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-muted rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-light mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is your warranty policy?',
                a: 'We offer a comprehensive 10-year warranty on all our tiles covering manufacturing defects.',
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes! We provide attractive discounts for bulk orders. Contact our sales team for details.',
              },
              {
                q: 'What is your delivery timeline?',
                a: 'Standard delivery takes 5-7 business days. Express delivery options are also available.',
              },
              {
                q: 'Can you customize tile designs?',
                a: 'We offer customization for large projects. Please contact us to discuss your requirements.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background rounded p-6 border border-border hover:border-accent transition-colors duration-300">
                <h3 className="font-light text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
