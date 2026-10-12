import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Headphones, RefreshCw } from 'lucide-react';
import { BRAND } from '@/lib/brand';

export default function About() {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7202906/pexels-photo-7202906.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="ZESH fashion editorial showcasing women's bottom wear"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <p className="fade-in text-xs uppercase tracking-[0.4em] text-[#d4b896] mb-4 font-medium">
            Our Story
          </p>
          <h1 className="fade-in-up heading-xl text-white">About ZESH</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 md:py-32 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="image-zoom">
              <img
                src="https://images.pexels.com/photos/7138974/pexels-photo-7138974.jpeg?auto=compress&cs=tinysrgb&h=700&w=900"
                alt="Collection of garments crafted by ZESH"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
            </div>
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="heading-lg mb-6 text-[#1a1a1a]">
                A Brand Built on Comfort &amp; Fit
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-5 leading-relaxed">
                {BRAND.longDescription}
              </p>
              <p className="text-base text-[#2b2b2b]/80 mb-5 leading-relaxed">
                We believe that the right fit transforms how you feel. That is
                why every piece in our collection is crafted to deliver comfort
                without compromising on style — from tailored pants and
                trousers to relaxed joggers, leggings, palazzos, and track
                pants.
              </p>
              <p className="text-base text-[#2b2b2b]/80 leading-relaxed">
                Our designs are made to suit modern lifestyles, offering
                versatile options for work, casual outings, and daily comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-zesh">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-label">Our Philosophy</p>
            <h2 className="heading-lg text-[#1a1a1a] mb-6">
              Comfort-First, Always
            </h2>
            <p className="text-base text-[#2b2b2b]/80 leading-relaxed">
              At ZESH, our focus is simple: create women&apos;s bottom wear that
              fits well, feels great, and looks effortless. We design for real
              women who want versatile pieces that move with them through their
              day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-[#e8e0d4]">
              <div className="inline-flex items-center justify-center w-12 h-12 border border-[#b8935a]/40 rounded-full mb-5">
                <Truck size={22} className="text-[#b8935a]" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">
                Free Shipping
              </h3>
              <p className="text-sm text-[#2b2b2b]/60 leading-relaxed">
                Free shipping on all orders with &#8377;999 purchase, delivered
                straight to your doorstep.
              </p>
            </div>
            <div className="text-center p-8 border border-[#e8e0d4]">
              <div className="inline-flex items-center justify-center w-12 h-12 border border-[#b8935a]/40 rounded-full mb-5">
                <Headphones size={22} className="text-[#b8935a]" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">
                24/7 Support
              </h3>
              <p className="text-sm text-[#2b2b2b]/60 leading-relaxed">
                Our support team is always available to help with orders,
                sizing, and product queries.
              </p>
            </div>
            <div className="text-center p-8 border border-[#e8e0d4]">
              <div className="inline-flex items-center justify-center w-12 h-12 border border-[#b8935a]/40 rounded-full mb-5">
                <RefreshCw size={22} className="text-[#b8935a]" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">
                7-Day Replacement
              </h3>
              <p className="text-sm text-[#2b2b2b]/60 leading-relaxed">
                Easy replacement within 7 days for unused items, for a
                worry-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="py-24 md:py-32 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <p className="section-label">What We Create</p>
              <h2 className="heading-lg mb-6 text-[#1a1a1a]">
                Bottom Wear for Every Occasion
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-6 leading-relaxed">
                Our collections span pants, joggers, trousers, palazzos,
                leggings, and track pants — each designed to deliver the right
                balance of fit, comfort, and style.
              </p>
              <p className="text-base text-[#2b2b2b]/80 mb-8 leading-relaxed">
                Whether it&apos;s a workday, a casual outing, or a weekend
                adventure, ZESH has a fit for every moment.
              </p>
              <Link to="/collections" className="btn-outline">
                Browse Collections
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="image-zoom">
                <img
                  src="https://images.pexels.com/photos/8946961/pexels-photo-8946961.jpeg?auto=compress&cs=tinysrgb&h=600&w=400"
                  alt="Woman in wide-leg trousers"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="image-zoom mt-12">
                <img
                  src="https://images.pexels.com/photos/2659787/pexels-photo-2659787.jpeg?auto=compress&cs=tinysrgb&h=600&w=400"
                  alt="Woman in white palazzo pants"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-center">
        <div className="container-zesh">
          <h2 className="heading-md text-white mb-6">
            Ready to Explore ZESH?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary !bg-[#b8935a] hover:!bg-white hover:!text-[#1a1a1a]">
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.onlineStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              Shop Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
