'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Award, Zap, Palette, DollarSign, Truck, Shield, Users } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const categories = [
    { id: 1, name: 'Floor Tiles', image: '/marble-floor-tiles-premium.jpg' },
    { id: 2, name: 'Wall Tiles', image: '/ceramic-wall-tiles-modern.jpg' },
    { id: 3, name: 'Kitchen Tiles', image: '/kitchen-backsplash-tiles.jpg' },
    { id: 4, name: 'Bathroom Tiles', image: '/bathroom-tiles-luxury.jpg' },
    { id: 5, name: 'Outdoor Tiles', image: '/outdoor-patio-tiles.jpg' },
  ]

  const features = [
    { icon: Award, title: 'Quality', description: 'Premium materials with strict quality control' },
    { icon: Zap, title: 'Durability', description: 'Long-lasting finish that withstands time' },
    { icon: Palette, title: 'Modern Designs', description: 'Contemporary patterns and finishes' },
    { icon: DollarSign, title: 'Affordable', description: 'Premium quality at competitive pricing' },
  ]

  const advantages = [
    { icon: Truck, title: 'Fast Delivery', description: 'Quick shipping across the country' },
    { icon: Shield, title: 'Warranty', description: '10-year manufacturing warranty' },
    { icon: Users, title: 'Expert Support', description: 'Dedicated customer service team' },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      project: 'Luxury Villa, Mumbai',
      text: 'JAY CERAMICS transformed our home with their exquisite tile collections. The quality and designs are unmatched.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      project: 'Modern Office, Delhi',
      text: 'Professional service and stunning tiles. Every detail was perfect. Highly recommended for any project.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      project: 'Commercial Space, Bangalore',
      text: 'Best tile supplier I have worked with. Consistent quality and excellent customer support throughout.',
      rating: 5,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-balance leading-tight mb-6">
                Transforming Spaces With{' '}
                <span className="text-accent">Premium Tiles</span>
              </h1>
              <p className="text-lg font-light text-muted-foreground mb-8 leading-relaxed">
                JAY CERAMICS – Trusted Quality, Modern Designs, Lasting Durability
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-primary text-primary-foreground font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg text-center rounded-sm inline-flex items-center justify-center gap-2"
                >
                  View Collection <ChevronRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-primary text-primary font-light tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center rounded-sm inline-flex items-center justify-center gap-2"
                >
                  Contact Us <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            <div className="slide-up">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/luxury-ceramic-tiles-showcase.jpg"
                  alt="Premium tiles collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4 text-balance">
            Our <span className="text-accent">Collections</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our diverse range of tiles for every space and style
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.name}`}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover-lift"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
                  <h3 className="text-white font-light text-lg tracking-wide">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-balance">
            Why Choose <span className="text-accent">JAY CERAMICS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-6 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-balance">
            What Makes Us <span className="text-accent">Different</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => {
              const Icon = advantage.icon
              return (
                <div
                  key={idx}
                  className="text-center p-8 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-light mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4 text-balance">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Trusted by homeowners and businesses across the country
          </p>

          <div className="relative">
            <div className="bg-muted rounded-lg p-8 md:p-12 border border-border shadow-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <div key={i} className="text-accent text-2xl">★</div>
                ))}
              </div>
              <p className="text-lg font-light text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-light text-foreground">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-muted-foreground font-light">
                  {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial
                      ? 'bg-accent w-8'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg font-light mb-8 opacity-90">
            Explore our collection or get in touch with our experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-accent text-accent-foreground font-light tracking-wide hover:bg-accent/90 transition-all duration-300 rounded-sm"
            >
              Browse Tiles
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-light tracking-wide hover:bg-primary-foreground hover:text-primary transition-all duration-300 rounded-sm"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
