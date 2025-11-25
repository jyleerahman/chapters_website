import { useState } from 'react';
import { Mail, Calendar, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-sm tracking-wide mb-6">
              GET IN TOUCH
            </span>
            <h2 className="text-black mb-6">
              Let's build something great together
            </h2>
            <p className="text-gray-600 mb-12">
              Whether you're just starting out or need to scale your existing infrastructure, 
              we're here to help. Book a free consultation to discuss your project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-black mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    30-minute intro call to discuss your data challenges and explore solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-black mb-2">
                    Quick Response
                  </h3>
                  <p className="text-gray-600">
                    We typically respond within 24 hours with initial thoughts and next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-black mb-2">
                    Direct Email
                  </h3>
                  <p className="text-gray-600">
                    Prefer email? Reach us at{' '}
                    <a href="mailto:hello@chapters.consulting" className="underline">
                      hello@chapters.consulting
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 p-10">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-black mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    We'll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black mb-2">Chapters</p>
          <p className="text-sm text-gray-500">
            © 2025 Chapters Consulting. Building better data infrastructure.
          </p>
        </div>
      </footer>
    </section>
  );
}