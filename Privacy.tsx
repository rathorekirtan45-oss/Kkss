import { Link } from 'react-router-dom';
import { BRAND } from '@/lib/brand';

export default function Privacy() {
  return (
    <div className="pt-20 min-h-screen bg-[#f7f3ed]">
      <section className="py-20 md:py-28">
        <div className="container-zesh max-w-3xl">
          <p className="section-label">Legal</p>
          <h1 className="heading-lg text-[#1a1a1a] mb-10">Privacy Policy</h1>

          <div className="space-y-6 text-sm text-[#2b2b2b]/80 leading-relaxed">
            <p>
              {BRAND.name} is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your information when
              you interact with our website or submit an enquiry.
            </p>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Information We Collect
              </h2>
              <p>
                When you submit an enquiry form, we collect your name, email
                address, phone number, company name (if provided), enquiry
                type, and your message. We do not collect sensitive personal
                data beyond what is necessary to respond to your enquiry.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                How We Use Your Information
              </h2>
              <p>
                Your information is used solely to respond to your enquiry,
                provide product or business information, and communicate with
                you regarding your request. We do not sell or share your
                information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Data Security
              </h2>
              <p>
                Your enquiry data is stored securely and is accessible only to
                authorised personnel. We take reasonable measures to protect
                your information from unauthorised access or disclosure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal information at any time by contacting us through the{' '}
                <Link to="/contact" className="text-[#b8935a] underline">
                  Contact Us
                </Link>{' '}
                page.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a revised date.
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
