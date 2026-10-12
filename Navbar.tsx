import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/brand';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#f7f3ed]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-zesh flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'
            }`}
          >
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-[#b8935a] font-medium'
                  : scrolled
                    ? 'text-[#1a1a1a]'
                    : 'text-[#1a1a1a]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BRAND.onlineStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-6"
          >
            Shop Online
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#1a1a1a] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#f7f3ed] border-t border-[#e8e0d4] fade-in">
          <nav className="container-zesh py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide py-2 border-b border-[#e8e0d4]/60 ${
                  location.pathname === link.path
                    ? 'text-[#b8935a] font-medium'
                    : 'text-[#1a1a1a]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BRAND.onlineStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Shop Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
