'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const galleryImages = [
    { id: 1, title: 'Living Room Marble Tiles', category: 'Living Room', image: '/luxury-living-room-marble-tiles.jpg' },
    { id: 2, title: 'Bathroom Spa Design', category: 'Bathroom', image: '/spa-bathroom-tiles-design.jpg' },
    { id: 3, title: 'Kitchen Backsplash', category: 'Kitchen', image: '/kitchen-backsplash-tiles-modern.jpg' },
    { id: 4, title: 'Outdoor Patio', category: 'Outdoor', image: '/outdoor-patio-tiles-luxury.jpg' },
    { id: 5, title: 'Marble Accent Wall', category: 'Wall', image: '/marble-accent-wall-tiles.jpg' },
    { id: 6, title: 'Bedroom Floor Tiles', category: 'Living Room', image: '/bedroom-floor-tiles-elegant.jpg' },
    { id: 7, title: 'Entryway Design', category: 'Living Room', image: '/entryway-floor-tiles-modern.jpg' },
    { id: 8, title: 'Pool Area', category: 'Outdoor', image: '/pool-area-outdoor-tiles.jpg' },
    { id: 9, title: 'Bathroom Mirror Wall', category: 'Bathroom', image: '/bathroom-mirror-wall-tiles.jpg' },
    { id: 10, title: 'Kitchen Island', category: 'Kitchen', image: '/kitchen-island-tiles-ceramic.jpg' },
    { id: 11, title: 'Commercial Lobby', category: 'Commercial', image: '/commercial-lobby-tiles.jpg' },
    { id: 12, title: 'Hallway Design', category: 'Wall', image: '/hallway-wall-tiles-design.jpg' },
  ]

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setSelectedImage(galleryImages[index].image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % galleryImages.length
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex].image)
  }

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex].image)
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-light text-balance mb-4">
            Our <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Explore stunning tile installations across residential and commercial spaces
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-muted border border-border hover:border-accent transition-all duration-300 break-inside-avoid animate-in fade-in"
              onClick={() => openLightbox(idx)}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <h3 className="text-white font-light text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Main Image */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="text-center text-white font-light text-sm mt-4">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 absolute -bottom-16 left-0 right-0 px-4">
              <button
                onClick={prevImage}
                className="p-2 text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Image Title */}
              <div className="text-center">
                <h3 className="text-white font-light text-lg">{galleryImages[selectedIndex].title}</h3>
                <p className="text-white/60 text-sm font-light">{galleryImages[selectedIndex].category}</p>
              </div>

              <button
                onClick={nextImage}
                className="p-2 text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
