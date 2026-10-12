import { Link } from 'react-router-dom';
import {
  Truck,
  Headphones,
  RefreshCw,
  ArrowRight,
  ShoppingBag,
  Mail,
  Phone,
  Instagram,
} from 'lucide-react';
import { BRAND, CATEGORIES, HIGHLIGHTS, GALLERY_IMAGES } from '@/lib/brand';

const ICONS: Record<string, typeof Truck> = {
  Truck,
  Headphones,
  RefreshCw,
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* A. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5253944/pexels-photo-5253944.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
            alt="Women in stylish ZESH bottom wear fashion editorial"
            className="w-full h-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 container-zesh pt-20">
          <div className="max-w-2xl">
            <p className="fade-in text-xs uppercase tracking-[0.4em] text-[#d4b896] mb-6 font-medium">
              Women&apos;s Bottom Wear
            </p>
            <h1 className="fade-in-up heading-xl text-white mb-6">
              {BRAND.tagline}
            </h1>
            <p className="fade-in-delay-1 text-lg text-white/80 mb-10 max-w-xl font-light leading-relaxed">
              {BRAND.description}
            </p>
            <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4">
              <Link to="/collections" className="btn-light">
                Explore Collections
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-light">
                Business Enquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* B. Brand Introduction */}
      <section className="py-24 md:py-32 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="section-label">Welcome to ZESH</p>
              <h2 className="heading-lg mb-6 text-[#1a1a1a]">
                Comfort-First Designs for the Modern Woman
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-6 leading-relaxed">
                {BRAND.longDescription}
              </p>
              <p className="text-base text-[#2b2b2b]/80 mb-8 leading-relaxed">
                From everyday essentials to fashion-forward silhouettes, every
                piece is designed to move with you — for work, casual outings,
                and weekend wear.
              </p>
              <Link to="/about" className="btn-outline">
                Discover Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="image-zoom rounded-sm">
                <img
                  src="https://images.pexels.com/photos/7202906/pexels-photo-7202906.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Fashionable women in stylish ZESH bottom wear"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#b8935a] text-white px-8 py-6 hidden md:block">
                <p className="font-serif text-3xl font-light">
                  Starting at {BRAND.startingPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Featured Collections */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-zesh">
          <div className="text-center mb-16">
            <p className="section-label">Shop by Category</p>
            <h2 className="heading-lg text-[#1a1a1a]">Featured Collections</h2>
            <p className="text-base text-[#2b2b2b]/60 mt-4 max-w-xl mx-auto">
              Explore our range of women&apos;s bottom wear, thoughtfully
              designed for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.map((category, idx) => (
              <Link
                key={category.slug}
                to={`/collections?category=${category.slug}`}
                className={`group ${idx === 0 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="image-zoom relative h-72 md:h-96 bg-[#e8e0d4]">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 line-clamp-1">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-xs uppercase tracking-wider text-[#d4b896] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Collection <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* D. Brand Highlights */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="container-zesh">
          <div className="grid md:grid-cols-3 gap-12">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = ICONS[highlight.icon] || Truck;
              return (
                <div
                  key={highlight.title}
                  className="text-center md:text-left"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-[#b8935a]/40 rounded-full mb-5">
                    <Icon size={24} className="text-[#b8935a]" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E. Product Portfolio Preview */}
      <section className="py-24 md:py-32 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="heading-lg text-[#1a1a1a]">
                A Glimpse of Our Collection
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="link-underline text-sm uppercase tracking-wider text-[#1a1a1a] flex items-center gap-2"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, idx) => (
              <div
                key={idx}
                className={`image-zoom ${
                  idx === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${
                    idx === 0 ? 'h-full min-h-[300px]' : 'h-40 md:h-52'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. About ZESH Preview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <p className="section-label">About ZESH</p>
              <h2 className="heading-lg mb-6 text-[#1a1a1a]">
                Designed With Comfort, Fit &amp; Style in Mind
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-6 leading-relaxed">
                {BRAND.longDescription}
              </p>
              <p className="text-base text-[#2b2b2b]/80 mb-8 leading-relaxed">
                Our collections are thoughtfully crafted to suit modern
                lifestyles, offering versatile designs that are easy to wear
                for work, casual outings, and daily comfort.
              </p>
              <Link to="/about" className="btn-outline">
                Read More
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="image-zoom">
                <img
                  src="https://images.pexels.com/photos/39202946/pexels-photo-39202946.jpeg?auto=compress&cs=tinysrgb&h=600&w=400"
                  alt="Woman in ZESH bottom wear fashion"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="image-zoom mt-12">
                <img
                  src="https://images.pexels.com/photos/2517865/pexels-photo-2517865.jpeg?auto=compress&cs=tinysrgb&h=600&w=400"
                  alt="Fashion garments on a rack showcasing ZESH collections"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. Business Enquiry Section */}
      <section className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7203892/pexels-photo-7203892.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-zesh text-center">
          <p className="section-label">Partnerships</p>
          <h2 className="heading-lg text-white mb-6 max-w-3xl mx-auto">
            Let&apos;s Build a Business Partnership
          </h2>
          <p className="text-base text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            We welcome retailers, distributors, wholesalers, resellers, and
            bulk buyers to partner with ZESH. Connect with us to explore
            collaboration opportunities tailored to your business needs.
          </p>
          <Link to="/contact" className="btn-primary !bg-[#b8935a] hover:!bg-white hover:!text-[#1a1a1a]">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* H. Online Store Promotion */}
      <section className="py-24 md:py-32 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="image-zoom rounded-sm">
              <img
                src="https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&h=700&w=900"
                alt="Boutique store showcasing women's fashion"
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </div>
            <div>
              <p className="section-label">Shop Online</p>
              <h2 className="heading-lg mb-6 text-[#1a1a1a]">
                Explore &amp; Shop at Our Online Store
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-4 leading-relaxed">
                Browse our complete catalogue and shop your favourite styles
                online. {BRAND.comboOffer} — discover the perfect fit for every
                occasion.
              </p>
              <p className="text-sm text-[#2b2b2b]/60 mb-8">
                Free shipping on orders above &#8377;999. Easy 7-day
                replacement on unused items.
              </p>
              <a
                href={BRAND.onlineStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ShoppingBag size={16} />
                Visit Online Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* I. Contact Preview */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8e0d4]">
        <div className="container-zesh">
          <div className="text-center mb-12">
            <p className="section-label">Get in Touch</p>
            <h2 className="heading-md text-[#1a1a1a]">
              We&apos;d Love to Hear From You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 border border-[#e8e0d4] hover:border-[#b8935a] transition-colors duration-300"
            >
              <Instagram size={28} className="text-[#b8935a] mb-4" />
              <h3 className="font-serif text-lg mb-1 text-[#1a1a1a]">
                Instagram
              </h3>
              <p className="text-xs text-[#2b2b2b]/60">@myzesh.in</p>
            </a>
            <Link
              to="/contact"
              className="group flex flex-col items-center text-center p-8 border border-[#e8e0d4] hover:border-[#b8935a] transition-colors duration-300"
            >
              <Mail size={28} className="text-[#b8935a] mb-4" />
              <h3 className="font-serif text-lg mb-1 text-[#1a1a1a]">
                Enquiry
              </h3>
              <p className="text-xs text-[#2b2b2b]/60">
                Send us a message
              </p>
            </Link>
            <Link
              to="/contact"
              className="group flex flex-col items-center text-center p-8 border border-[#e8e0d4] hover:border-[#b8935a] transition-colors duration-300"
            >
              <Phone size={28} className="text-[#b8935a] mb-4" />
              <h3 className="font-serif text-lg mb-1 text-[#1a1a1a]">
                Business Hours
              </h3>
              <p className="text-xs text-[#2b2b2b]/60">{BRAND.hours}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
