import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { BRAND, CATEGORIES } from '@/lib/brand';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && CATEGORIES.some((c) => c.slug === category)) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    setSearchParams(slug === 'all' ? {} : { category: slug });
  };

  const filteredCategories =
    activeCategory === 'all'
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.slug === activeCategory);

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5253944/pexels-photo-5253944.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
          alt="ZESH collections of women's bottom wear"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <p className="fade-in text-xs uppercase tracking-[0.4em] text-[#d4b896] mb-4 font-medium">
            Browse Our Range
          </p>
          <h1 className="fade-in-up heading-xl text-white">Collections</h1>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[68px] z-30 bg-[#f7f3ed]/95 backdrop-blur-md border-b border-[#e8e0d4]">
        <div className="container-zesh py-4">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-5 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                activeCategory === 'all'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#1a1a1a] hover:text-[#b8935a]'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`px-5 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === cat.slug
                    ? 'bg-[#1a1a1a] text-white'
                    : 'text-[#1a1a1a] hover:text-[#b8935a]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-[#f7f3ed] min-h-[40vh]">
        <div className="container-zesh">
          {activeCategory === 'all' ? (
            <div className="space-y-20 md:space-y-28">
              {CATEGORIES.map((category) => (
                <div key={category.slug}>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="image-zoom">
                      <img
                        src={category.image}
                        alt={category.alt}
                        className="w-full h-80 md:h-[500px] object-cover"
                      />
                    </div>
                    <div>
                      <p className="section-label">Collection</p>
                      <h2 className="heading-lg text-[#1a1a1a] mb-4">
                        {category.name}
                      </h2>
                      <p className="text-base text-[#2b2b2b]/80 mb-8 leading-relaxed max-w-md">
                        {category.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => handleCategoryClick(category.slug)}
                          className="btn-outline"
                        >
                          View {category.name}
                          <ArrowRight size={16} />
                        </button>
                        <a
                          href={BRAND.onlineStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <ShoppingBag size={16} />
                          Shop Online
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {filteredCategories.map((category) => (
                <div key={category.slug} className="max-w-4xl mx-auto text-center">
                  <div className="image-zoom mb-10">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-80 md:h-[550px] object-cover"
                    />
                  </div>
                  <p className="section-label">Collection</p>
                  <h2 className="heading-lg text-[#1a1a1a] mb-4">
                    {category.name}
                  </h2>
                  <p className="text-base text-[#2b2b2b]/80 mb-8 max-w-lg mx-auto leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-sm text-[#2b2b2b]/60 mb-8 max-w-lg mx-auto">
                    Explore this collection and more at our online store. Prices
                    starting at {BRAND.startingPrice}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={BRAND.onlineStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ShoppingBag size={16} />
                      Shop {category.name}
                    </a>
                    <Link to="/portfolio" className="btn-outline">
                      View Gallery
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Shop Online CTA */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-center">
        <div className="container-zesh">
          <h2 className="heading-md text-white mb-6">
            Shop the Full Collection Online
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-lg mx-auto">
            {BRAND.comboOffer}. Free shipping on orders above &#8377;999.
          </p>
          <a
            href={BRAND.onlineStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#b8935a] hover:!bg-white hover:!text-[#1a1a1a]"
          >
            <ShoppingBag size={16} />
            Visit Online Store
          </a>
        </div>
      </section>
    </div>
  );
}
