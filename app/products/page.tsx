'use client'

import Image from 'next/image'
import { useState, useMemo } from 'react'
import { Download, Filter, Star } from 'lucide-react'

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedSize, setSelectedSize] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Marble Elegance',
      type: 'Floor Tiles',
      size: '600x600mm',
      material: 'Ceramic',
      image: '/marble-elegance-floor-tile.jpg',
      finish: 'Polished',
      specs: 'Anti-slip, Frost resistant',
      price: '₹450/sqft',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Modern White',
      type: 'Wall Tiles',
      size: '300x600mm',
      material: 'Ceramic',
      image: '/modern-white-wall-tile.jpg',
      finish: 'Matte',
      specs: 'Easy to clean, Durable',
      price: '₹320/sqft',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Granite Touch',
      type: 'Floor Tiles',
      size: '800x800mm',
      material: 'Vitrified',
      image: '/granite-texture-floor-tile.jpg',
      finish: 'Semi-polished',
      specs: 'Super glossy, Water resistant',
      price: '₹580/sqft',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Kitchen Classic',
      type: 'Kitchen Tiles',
      size: '200x200mm',
      material: 'Ceramic',
      image: '/kitchen-backsplash-tile-classic.jpg',
      finish: 'Glossy',
      specs: 'Oil resistant, Easy to maintain',
      price: '₹280/sqft',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Spa Serenity',
      type: 'Bathroom Tiles',
      size: '300x300mm',
      material: 'Ceramic',
      image: '/bathroom-spa-tiles.jpg',
      finish: 'Matte',
      specs: 'Non-slip, Anti-bacterial',
      price: '₹350/sqft',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Outdoor Stone',
      type: 'Outdoor Tiles',
      size: '400x400mm',
      material: 'Vitrified',
      image: '/outdoor-patio-stone-tiles.jpg',
      finish: 'Textured',
      specs: 'Weather resistant, Durable',
      price: '₹520/sqft',
      rating: 4.5,
    },
    {
      id: 7,
      name: 'Luxury Black',
      type: 'Floor Tiles',
      size: '600x600mm',
      material: 'Vitrified',
      image: '/luxury-black-marble-floor-tile.jpg',
      finish: 'Polished',
      specs: 'Anti-slip, Premium finish',
      price: '₹650/sqft',
      rating: 4.9,
    },
    {
      id: 8,
      name: 'Rustic Beige',
      type: 'Wall Tiles',
      size: '300x600mm',
      material: 'Ceramic',
      image: '/rustic-beige-wall-tile.jpg',
      finish: 'Rustic',
      specs: 'Textured, Warm finish',
      price: '₹380/sqft',
      rating: 4.6,
    },
  ]

  const types = ['All', ...new Set(products.map(p => p.type))]
  const sizes = ['All', ...new Set(products.map(p => p.size))]
  const materials = ['All', ...new Set(products.map(p => p.material))]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const typeMatch = selectedType === 'All' || product.type === selectedType
      const sizeMatch = selectedSize === 'All' || product.size === selectedSize
      const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial
      return typeMatch && sizeMatch && materialMatch
    })
  }, [selectedType, selectedSize, selectedMaterial])

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-light text-balance mb-4">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Discover our comprehensive collection of premium tiles for every space. With over 50+ designs in stock.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-muted rounded-lg p-6 md:p-8 mb-12 border border-border">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={20} className="text-accent" />
            <h2 className="text-xl font-light">Filter Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-light mb-3 text-foreground">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Size Filter */}
            <div>
              <label className="block text-sm font-light mb-3 text-foreground">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="block text-sm font-light mb-3 text-foreground">Material</label>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full px-4 py-2 border border-border bg-background rounded-sm font-light focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {materials.map(material => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-light text-foreground flex-1">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-light">{product.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-1 mb-4 text-sm font-light text-muted-foreground">
                    <p><span className="font-semibold">Type:</span> {product.type}</p>
                    <p><span className="font-semibold">Size:</span> {product.size}</p>
                    <p><span className="font-semibold">Material:</span> {product.material}</p>
                    <p><span className="font-semibold">Finish:</span> {product.finish}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 italic">{product.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-light text-lg">{product.price}</span>
                    <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-light hover:bg-primary/90 transition-colors duration-300 rounded-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground font-light">
                No products found with the selected filters. Try adjusting your selections.
              </p>
            </div>
          )}
        </div>

        {/* Catalogue Download */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-light mb-4">Download Our Catalogue</h3>
          <p className="font-light mb-6 opacity-90">
            Get detailed specifications, pricing, and design inspirations for all 50+ tile designs
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-light hover:bg-accent/90 transition-colors duration-300 rounded-sm">
            <Download size={20} />
            Download Catalogue
          </button>
        </div>
      </div>
    </main>
  )
}
