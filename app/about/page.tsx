import Image from 'next/image'
import { Award, Target, Heart, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-light text-balance mb-4">
            About <span className="text-accent">JAY CERAMICS</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Your trusted partner in transforming spaces with premium ceramic tiles since 2002
          </p>
        </div>

        {/* Brand Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in">
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
            <p className="text-foreground font-light leading-relaxed mb-4">
              JAY CERAMICS was founded in 2002 with a vision to provide premium, high-quality ceramic tiles that combine durability, aesthetics, and affordability. With over two decades of experience in the industry, we've become a trusted name in ceramic tile manufacturing and distribution.
            </p>
            <p className="text-foreground font-light leading-relaxed mb-4">
              Our journey began with a commitment to excellence and a passion for innovation. Today, we serve thousands of satisfied customers across residential and commercial projects, bringing elegance and durability to every space. What started as a small operation has grown into one of the region's leading tile suppliers.
            </p>
            <p className="text-foreground font-light leading-relaxed mb-4">
              We believe that quality tiles are an investment in your space's future. That's why we maintain the highest manufacturing standards and offer extensive collections to suit every style and budget.
            </p>
            <p className="text-foreground font-light leading-relaxed">
              Our success is built on customer satisfaction, innovation, and unwavering commitment to quality. We continue to expand our product range and improve our services to meet the evolving needs of our valued clients.
            </p>
          </div>
          <div className="slide-up">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/ceramic-tile-factory-manufacturing.jpg"
                alt="JAY CERAMICS Factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-muted rounded-lg p-12 border border-border mb-20">
          <h2 className="text-3xl font-light text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years of Excellence' },
              { number: '50000+', label: 'Happy Customers' },
              { number: '50+', label: 'Tile Designs' },
              { number: '15', label: 'States Served' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-light text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">Our Mission, Vision & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-light mb-4">Mission</h3>
              <p className="text-foreground font-light leading-relaxed">
                To deliver premium quality ceramic tiles that enhance the beauty and functionality of every space, backed by exceptional customer service and competitive pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-light mb-4">Vision</h3>
              <p className="text-foreground font-light leading-relaxed">
                To become the leading ceramic tile brand in the region, recognized for innovation, quality, and customer satisfaction across all market segments.
              </p>
            </div>

            {/* Values */}
            <div className="border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-light mb-4">Values</h3>
              <p className="text-foreground font-light leading-relaxed">
                Quality excellence, customer-first approach, innovation, sustainability, and integrity in all our operations and relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing & Quality */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="slide-up order-2 md:order-1">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/quality-control-testing-tiles-laboratory.jpg"
                alt="Quality Control"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="fade-in order-1 md:order-2">
            <h2 className="text-3xl font-light mb-6">Manufacturing Excellence</h2>
            <p className="text-foreground font-light leading-relaxed mb-4">
              Our state-of-the-art manufacturing facility employs cutting-edge technology and rigorous quality control processes. Each tile undergoes comprehensive testing to ensure it meets international standards for durability, finish quality, and design precision.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Advanced kiln technology for optimal firing',
                'Precision cutting and sizing equipment',
                'Comprehensive quality testing protocols',
                'ISO 9001:2015 certified processes',
                'Sustainable manufacturing practices',
                'Eco-friendly disposal systems',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-muted rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-light mb-8 text-center">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ISO 9001:2015', desc: 'Quality Management System' },
              { title: 'ISO 14001:2015', desc: 'Environmental Management' },
              { title: 'EN 14411', desc: 'Ceramic Tiles Standard' },
              { title: 'ASTM International', desc: 'Testing Standards' },
            ].map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-light text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
