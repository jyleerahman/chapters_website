import { useState, useRef } from 'react';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export function Inquire() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'project',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', type: 'project', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="inquire" className="py-32 px-6 lg:px-12 bg-black" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-green-400 mb-4">$ contact</div>
          <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Let's talk
          </h2>
          <p className="text-xl text-gray-400">
            Got a project? Want to join the team? Just want to say hi? 
            Drop us a line.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/5 border border-white/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-400/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Send className="w-8 h-8 text-green-400" />
              </motion.div>
              <h3 className="text-2xl text-white mb-3">
                Message sent
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                $ We'll get back to you within 24 hours
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="john@startup.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2 font-mono">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your Startup"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm text-gray-400 mb-2 font-mono">
                    I'm reaching out about *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="project">A project</option>
                    <option value="job">Joining the team</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project, what role you're interested in, or what's on your mind..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-mono text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send message
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Alternative Contact */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-sm">
            <Mail className="w-4 h-4" />
            <span>Or email us directly at</span>
            <a
              href="mailto:hello@chapters.consulting"
              className="text-white hover:text-gray-300 transition-colors underline"
            >
              hello@chapters.consulting
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-32 pt-12 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white mb-2 font-mono">{'>'} Chapters_</p>
          <p className="text-sm text-gray-500 font-mono">
            © 2025 · Building different
          </p>
        </motion.footer>
      </div>
    </section>
  );
}