import { Link } from 'react-router-dom';
import { Instagram, Clock } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/brand';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#e8e0d4] pt-16 pb-8">
      <div className="container-zesh">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-semibold text-white mb-4">
              {BRAND.name}
            </h3>
            <p className="text-sm text-[#e8e0d4]/70 leading-relaxed max-w-xs">
              {BRAND.description}
            </p>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[#e8e0d4]/60 hover:text-[#b8935a] transition-colors duration-300"
            >
              <Instagram size={18} />
              Follow on Instagram
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#b8935a] mb-5 font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#e8e0d4]/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#b8935a] mb-5 font-medium">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BRAND.onlineStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e0d4]/70 hover:text-white transition-colors duration-300"
                >
                  Online Store
                </a>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#e8e0d4]/70 hover:text-white transition-colors duration-300"
                >
                  Browse Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-[#e8e0d4]/70 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#e8e0d4]/70 hover:text-white transition-colors duration-300"
                >
                  Business Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#b8935a] mb-5 font-medium">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#e8e0d4]/70">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#b8935a]" />
                <span>{BRAND.hours}</span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Send an Enquiry
                </Link>
              </li>
              <li>
                <a
                  href={BRAND.onlineStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Visit Online Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e8e0d4]/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8e0d4]/50">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-[#e8e0d4]/50 hover:text-[#e8e0d4] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-[#e8e0d4]/50 hover:text-[#e8e0d4] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
