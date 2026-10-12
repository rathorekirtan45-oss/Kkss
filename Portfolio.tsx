import { useState, useMemo, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/brand';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const set = new Set(GALLERY_IMAGES.map((img) => img.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9082613/pexels-photo-9082613.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
          alt="ZESH fashion portfolio showcasing women's bottom wear"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <p className="fade-in text-xs uppercase tracking-[0.4em] text-[#d4b896] mb-4 font-medium">
            Visual Showcase
          </p>
          <h1 className="fade-in-up heading-xl text-white">Portfolio</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="text-center mb-12">
            <p className="text-sm text-[#2b2b2b]/60 max-w-xl mx-auto">
              A curated showcase of our collections, campaigns, and brand
              visuals. Click any image to view it in full.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#1a1a1a] text-white'
                    : 'text-[#1a1a1a] hover:text-[#b8935a] border border-[#e8e0d4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="image-zoom group relative cursor-pointer bg-[#e8e0d4]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                  <span className="text-xs uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-center text-sm text-white/60 mt-4 max-w-lg mx-auto">
              {filteredImages[lightboxIndex].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
