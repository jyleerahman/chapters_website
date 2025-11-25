import { Zap, Terminal, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const roles = [
  {
    title: 'Data Engineer',
    description: 'Build scalable data pipelines and infrastructure for fast-growing startups.',
    requirements: [
      'Production experience with data pipelines',
      'Strong Python/SQL skills',
      'Experience with modern data stack (Airflow, dbt, etc.)',
      'Can debug distributed systems',
    ],
  },
  {
    title: 'AI Engineer',
    description: 'Ship AI systems that actually work in production environments.',
    requirements: [
      'Shipped LLM-based products to production',
      'Experience with RAG, embeddings, vector DBs',
      'Strong understanding of ML fundamentals',
      'Comfortable with ambiguity',
    ],
  },
  {
    title: 'Full Stack Engineer',
    description: 'Build modern web applications with Next.js and TypeScript.',
    requirements: [
      'Expert in React/Next.js/TypeScript',
      'Experience with real-time features',
      'Strong API design skills',
      'Shipped products end-to-end',
    ],
  },
];

const perks = [
  {
    icon: Zap,
    title: 'Work on hard problems',
    description: 'No CRUD apps. Real technical challenges.',
  },
  {
    icon: Terminal,
    title: 'Learn constantly',
    description: 'Work with engineers at the top of their game.',
  },
  {
    icon: Rocket,
    title: 'Ship fast',
    description: 'See your code in production, not stuck in review.',
  },
];

export function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ open positions';
  const typingSpeed = 50;
  const pauseAfterTyping = 2000;
  const pauseAfterDeleting = 1000;

  useEffect(() => {
    if (!isInView) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseAfterTyping);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(fullText.slice(0, currentIndex));
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          // Finished deleting, wait then start typing again
          timeoutId = setTimeout(() => {
            isDeleting = false;
            type();
          }, pauseAfterDeleting);
        }
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, fullText]);

  return (
    <section id="join" className="py-32 px-6 lg:px-12 bg-black relative" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-green-400 mb-4">
            {displayedText}
            {isInView && (
              <span className="animate-pulse">|</span>
            )}
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Join the team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            We're looking for esoteric, forward-thinking engineers who want to build 
            things that matter. If you're cracked and want to work with startups, let's talk.
          </p>
        </motion.div>

        {/* Why Join */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2, transition: { type: "spring", stiffness: 200, damping: 15 } }}
                >
                  <Icon className="w-8 h-8 text-green-400 mb-4" />
                </motion.div>
                <h3 className="text-lg text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {perk.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Open Roles */}
        <div className="space-y-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {role.description}
                  </p>
                  <div>
                    <p className="text-xs text-gray-500 font-mono mb-3">You should have:</p>
                    <ul className="space-y-2">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-green-400 mt-1">›</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('inquire');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm whitespace-nowrap self-start"
                  whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                >
                  Apply now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl text-white mb-4">
            Don't see your role?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always open to talking with exceptional engineers. 
            If you're cracked and think you'd be a good fit, reach out.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('inquire');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors text-sm font-mono"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            {'>'} Send us a message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}