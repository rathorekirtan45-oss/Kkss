import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Instagram,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { supabase, EnquiryType } from '@/lib/supabase';

const ENQUIRY_TYPES: { value: EnquiryType; label: string }[] = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'product', label: 'Product Enquiry' },
  { value: 'retail', label: 'Retail Partnership' },
  { value: 'wholesale', label: 'Wholesale Enquiry' },
  { value: 'distribution', label: 'Distribution Enquiry' },
  { value: 'bulk', label: 'Bulk Order' },
  { value: 'other', label: 'Other' },
];

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  enquiry_type: EnquiryType;
  message: string;
  consent: boolean;
};

const INITIAL_FORM: FormState = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  enquiry_type: 'general',
  message: '',
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.full_name.trim()) {
      newErrors.full_name = 'Please enter your full name';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    if (!form.consent) {
      newErrors.consent = 'Please accept the privacy notice to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('enquiries').insert({
        full_name: form.full_name.trim(),
        company_name: form.company_name.trim() || null,
        email: form.email.trim(),
        phone: form.phone.trim(),
        enquiry_type: form.enquiry_type,
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ZESH, I would like to make a business enquiry.\n\nName: \nEnquiry Type: \nMessage: `
  );

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7249993/pexels-photo-7249993.jpeg?auto=compress&cs=tinysrgb&h=700&w=1600"
          alt="ZESH contact and business enquiry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <p className="fade-in text-xs uppercase tracking-[0.4em] text-[#d4b896] mb-4 font-medium">
            We&apos;re Here to Help
          </p>
          <h1 className="fade-in-up heading-xl text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="py-20 md:py-28 bg-[#f7f3ed]">
        <div className="container-zesh">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <p className="section-label">Get in Touch</p>
              <h2 className="heading-lg text-[#1a1a1a] mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-base text-[#2b2b2b]/80 mb-10 leading-relaxed">
                Whether you have a product question, want to explore a retail
                partnership, or are interested in wholesale and distribution
                opportunities, we&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 border border-[#b8935a]/40 rounded-full shrink-0">
                    <Clock size={20} className="text-[#b8935a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-[#2b2b2b]/60">{BRAND.hours}</p>
                  </div>
                </div>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 border border-[#b8935a]/40 rounded-full shrink-0">
                    <Instagram size={20} className="text-[#b8935a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">
                      Instagram
                    </h3>
                    <p className="text-sm text-[#2b2b2b]/60 group-hover:text-[#b8935a] transition-colors">
                      @myzesh.in
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 border border-[#b8935a]/40 rounded-full shrink-0">
                    <Send size={20} className="text-[#b8935a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">
                      Online Store
                    </h3>
                    <a
                      href={BRAND.onlineStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2b2b2b]/60 hover:text-[#b8935a] transition-colors"
                    >
                      myzesh.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#e8e0d4]">
                <p className="text-xs text-[#2b2b2b]/50 leading-relaxed">
                  Phone, WhatsApp, and email contact details will be displayed
                  here once verified. If you have updated contact information,
                  please share it so we can add it to the website.
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-6">
                  Send an Enquiry
                </h3>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle2 size={56} className="text-[#b8935a] mx-auto mb-6" />
                    <h4 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                      Thank You!
                    </h4>
                    <p className="text-sm text-[#2b2b2b]/70 mb-8 max-w-sm mx-auto">
                      Your enquiry has been submitted successfully. Our team
                      will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-outline"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {status === 'error' && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200">
                        <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">
                          {errorMessage ||
                            'There was a problem submitting your enquiry. Please try again.'}
                        </p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="full_name"
                          className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="full_name"
                          type="text"
                          value={form.full_name}
                          onChange={(e) => handleChange('full_name', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#f7f3ed] border text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors ${
                            errors.full_name ? 'border-red-400' : 'border-[#e8e0d4]'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.full_name && (
                          <p className="text-xs text-red-500 mt-1">{errors.full_name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company_name"
                          className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                        >
                          Company / Business Name
                        </label>
                        <input
                          id="company_name"
                          type="text"
                          value={form.company_name}
                          onChange={(e) => handleChange('company_name', e.target.value)}
                          className="w-full px-4 py-3 bg-[#f7f3ed] border border-[#e8e0d4] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#f7f3ed] border text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors ${
                            errors.email ? 'border-red-400' : 'border-[#e8e0d4]'
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#f7f3ed] border text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors ${
                            errors.phone ? 'border-red-400' : 'border-[#e8e0d4]'
                          }`}
                          placeholder="+91 00000 00000"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry_type"
                        className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                      >
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiry_type"
                        value={form.enquiry_type}
                        onChange={(e) => handleChange('enquiry_type', e.target.value)}
                        className="w-full px-4 py-3 bg-[#f7f3ed] border border-[#e8e0d4] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors"
                      >
                        {ENQUIRY_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider text-[#2b2b2b]/70 mb-2 font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`w-full px-4 py-3 bg-[#f7f3ed] border text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8935a] transition-colors resize-none ${
                          errors.message ? 'border-red-400' : 'border-[#e8e0d4]'
                        }`}
                        placeholder="Tell us about your enquiry..."
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => handleChange('consent', e.target.checked)}
                          className="mt-1 w-4 h-4 accent-[#b8935a] cursor-pointer"
                        />
                        <span className="text-xs text-[#2b2b2b]/70 leading-relaxed">
                          I agree that my submitted information will be used
                          solely to respond to this enquiry, in accordance with
                          the{' '}
                          <Link
                            to="/privacy"
                            className="text-[#b8935a] underline hover:text-[#1a1a1a] transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-red-500 mt-1">{errors.consent}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partnership CTA */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-center">
        <div className="container-zesh">
          <p className="section-label">Partnerships</p>
          <h2 className="heading-md text-white mb-6">
            Interested in a Business Partnership?
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-lg mx-auto">
            We work with retailers, distributors, wholesalers, and bulk buyers.
            Send us an enquiry and we&apos;ll get back to you with
            partnership details.
          </p>
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#b8935a] hover:!bg-white hover:!text-[#1a1a1a] mb-4"
          >
            Enquire via WhatsApp
            <ArrowRight size={16} />
          </a>
          <p className="text-xs text-white/40">
            WhatsApp link will be active once a verified number is configured.
          </p>
        </div>
      </section>
    </div>
  );
}
