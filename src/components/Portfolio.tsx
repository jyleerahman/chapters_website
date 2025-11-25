import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const projects = [
  {
    title: 'Real-time Fraud Detection',
    client: 'FinTech Startup',
    description: 'Built streaming pipeline processing 100K events/sec with sub-second detection.',
    tags: ['Data Engineering', 'Kafka', 'Python'],
    status: 'Production',
  },
  {
    title: 'AI-Powered Document Processing',
    client: 'Legal Tech',
    description: 'RAG system for contract analysis, reduced review time by 80%.',
    tags: ['AI Engineering', 'RAG', 'OpenAI'],
    status: 'Production',
  },
  {
    title: 'Analytics Platform',
    client: 'SaaS Startup',
    description: 'Next.js dashboard with real-time data pipeline, 0 to launch in 6 weeks.',
    tags: ['Full Stack', 'Next.js', 'Real-time'],
    status: 'Production',
  },
  {
    title: 'Data Warehouse Migration',
    client: 'E-commerce',
    description: 'Migrated legacy warehouse to modern stack, 10x query performance.',
    tags: ['Data Engineering', 'Snowflake', 'dbt'],
    status: 'Production',
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ ls projects/';
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
    <section id="portfolio" className="py-32 px-6 lg:px-12 bg-black relative" ref={ref}>
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
            What we've shipped
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real projects. Real results. All in production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <motion.div 
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <span className="px-2 py-0.5 bg-green-400/20 text-green-400 text-xs font-mono border border-green-400/30">
                      {project.status}
                    </span>
                  </motion.div>
                  <p className="text-sm text-gray-500 font-mono">{project.client}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/5 text-gray-400 text-xs font-mono border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 font-mono text-sm">
            + more under NDA
          </p>
        </motion.div>
      </div>
    </section>
  );
}