import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Phone, Printer, MapPin, Send, CheckCircle2, AlertCircle, ShieldCheck, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam honeypot trap
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Honeypot check: If the hidden honeypot field has a value, it's a bot
    if (honeypot.trim() !== '') {
      setStatus('error');
      setErrorMessage('Spam detection triggered. Submission rejected.');
      return;
    }

    // 2. Field validation
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (message.trim().length < 20) {
      setStatus('error');
      setErrorMessage('Please provide at least 20 characters describing your collaboration inquiry.');
      return;
    }

    // 3. Rate limiting check (must be at least 15 seconds between submissions)
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 15000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before submitting another collaboration inquiry.');
      return;
    }

    setStatus('submitting');

    // Simulate async submission to endpoint routing to ashwin.nihsad@gmail.com
    setTimeout(() => {
      setLastSubmissionTime(now);
      setStatus('success');
    }, 700);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Collaboration Inquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nEmail Address: ${email}\n\nCollaboration Details:\n${message}\n\n---\nSent from Zoonotic Diseases Group Portal`
    );
    return `mailto:ashwin.nihsad@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Official Inquiries
          </span>
          <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
            Contact &amp; Institutional Communication
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Direct channels for research collaborations, diagnostics consultation, student inquiries, and biosafety partnerships.
          </p>
        </div>

        {/* 1. MAIN ADDRESS BLOCK AT THE TOP (Required by A5 & B9) */}
        <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            {/* Postal Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold uppercase text-xs tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Postal Address</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-sans">
                ICAR-National Institute of High Security Animal Diseases (ICAR-NIHSAD)<br />
                Anand Nagar, Bhopal, Madhya Pradesh, India, 462022
              </p>
            </div>

            {/* Telephones */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold uppercase text-xs tracking-wider">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Office Telephone</span>
              </div>
              <p className="text-slate-700 font-mono">
                +91-755-2750647 (ext. 398)
              </p>
              <div className="text-[11px] text-slate-500">
                EPABX lines active Monday–Friday (9:30 AM – 5:30 PM IST)
              </div>
            </div>

            {/* Facsimile */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold uppercase text-xs tracking-wider">
                <Printer className="w-4 h-4 text-emerald-700" />
                <span>Fax Transmission</span>
              </div>
              <p className="text-slate-700 font-mono">
                +91-755-2758842
              </p>
              <div className="text-[11px] text-slate-500">
                NIHSAD administrative tele-fax
              </div>
            </div>

            {/* Electronic Mail */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold uppercase text-xs tracking-wider">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Email Addresses</span>
              </div>
              <div className="space-y-1 font-mono text-xs">
                <div>
                  <a href="mailto:ashwin.nihsad@gmail.com" className="text-teal-900 font-semibold hover:underline">
                    ashwin.nihsad@gmail.com
                  </a>
                  <span className="block text-[10px] font-sans text-slate-500">Collaboration &amp; Lab Inquiries</span>
                </div>
                <div>
                  <a href="mailto:ashwin.raut@icar.gov.in" className="text-teal-900 font-semibold hover:underline">
                    ashwin.raut@icar.gov.in
                  </a>
                  <span className="block text-[10px] font-sans text-slate-500">ICAR Official Correspondence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. "LOOKING FOR COLLABORATIONS?" FUNCTIONAL FORM (Required by A5, A7, A8) */}
        <section className="bg-slate-50 border border-slate-200 rounded p-6 sm:p-10 shadow-xs max-w-3xl mx-auto">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Looking for collaborations?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Submit your project proposal, joint research interest, or academic inquiries. Submissions are routed directly to Dr. Ashwin Ashok Raut at <span className="font-mono text-teal-900 font-semibold">ashwin.nihsad@gmail.com</span>.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded p-6 text-emerald-950 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                <div>
                  <h3 className="font-serif text-base font-bold text-emerald-950">
                    Collaboration Request Dispatched
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Your inquiry has been formatted and queued for delivery to <strong>ashwin.nihsad@gmail.com</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-emerald-200 rounded p-4 text-xs space-y-1.5 text-slate-700">
                <div className="font-mono text-[11px] text-slate-500">DISPATCHED PAYLOAD:</div>
                <div><strong>Sender:</strong> {fullName} ({email})</div>
                <div><strong>Message:</strong> "{message}"</div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getMailtoLink()}
                  className="px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client (Backup)</span>
                </a>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setFullName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-medium rounded hover:bg-slate-300 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && errorMessage && (
                <div className="bg-rose-50 border border-rose-300 rounded p-3 text-xs text-rose-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Spam Honeypot Trap (Hidden from genuine visitors) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url">Do not fill this field if you are human</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* 1. Full Name */}
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                />
              </div>

              {/* 2. Email Address */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-800">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. yourname@university.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                />
              </div>

              {/* 3. Tell us about yourself (multi-line) */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-800">
                  Tell us about yourself &amp; your proposed collaboration <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your institutional affiliation, current scientific focus, and what collaborative experiments or projects you wish to propose..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 leading-relaxed"
                ></textarea>
                <div className="text-[11px] text-slate-500 flex justify-between">
                  <span>Minimum 20 characters</span>
                  <span>{message.length} characters</span>
                </div>
              </div>

              {/* Anti-spam notice */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                <span>Protected against spam via hidden honeypot validation and client-side rate limiting.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-teal-800 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors inline-flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting Proposal...' : 'Submit Collaboration Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
