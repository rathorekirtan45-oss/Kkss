import { Link } from 'react-router-dom';
import { BRAND } from '@/lib/brand';

export default function Terms() {
  return (
    <div className="pt-20 min-h-screen bg-[#f7f3ed]">
      <section className="py-20 md:py-28">
        <div className="container-zesh max-w-3xl">
          <p className="section-label">Legal</p>
          <h1 className="heading-lg text-[#1a1a1a] mb-10">
            Terms &amp; Conditions
          </h1>

          <div className="space-y-6 text-sm text-[#2b2b2b]/80 leading-relaxed">
            <p>
              These terms govern your use of the {BRAND.name} website. By
              accessing this site, you agree to the terms outlined below.
            </p>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Website Use
              </h2>
              <p>
                This website provides information about {BRAND.name}&apos;s
                products and services, and allows you to submit business or
                product enquiries. You agree to use the website responsibly and
                not to submit false or misleading information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Product Information
              </h2>
              <p>
                Product images and descriptions on this website are for
                informational purposes. For purchases, pricing, availability,
                and detailed product specifications, please visit our{' '}
                <a
                  href={BRAND.onlineStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8935a] underline"
                >
                  online store
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Replacement Policy
              </h2>
              <p>
                We offer easy replacement within 7 days for unused items,
                ensuring a smooth and worry-free shopping experience. For full
                details, please refer to our online store.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Enquiries
              </h2>
              <p>
                Submitted enquiries are processed by our team during business
                hours ({BRAND.hours}). We strive to respond promptly but do not
                guarantee a specific response time.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Contact
              </h2>
              <p>
                For any questions about these terms, please{' '}
                <Link to="/contact" className="text-[#b8935a] underline">
                  contact us
                </Link>
                .
              </p>
            </div>

            <p className="text-xs text-[#2b2b2b]/50 pt-4">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
