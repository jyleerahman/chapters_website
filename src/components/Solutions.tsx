import { Database, Brain, Code2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const solutions = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Production-grade data infrastructure that scales.',
    capabilities: [
      'Data Pipelines',
      'Data Warehousing', 
      'Analytics Engineering',
      'Real-time Processing',
    ],
    tech: ['Airflow', 'dbt', 'Snowflake', 'Kafka'],
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Intelligent systems that actually work in production.',
    capabilities: [
      'Agent Workflows',
      'RAG & Document Embeddings',
      'LLM Fine-tuning',
      'Vector Databases',
    ],
    tech: ['OpenAI', 'LangChain', 'Pinecone', 'Anthropic'],
  },
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    description: 'Ship modern web applications fast.',
    capabilities: [
      'Next.js Applications',
      'Real-time Features',
      'API Development',
      'Database Design',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ cat solutions.txt';
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
    <section id="solutions" className="py-32 px-6 lg:px-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
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
            What we ship
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Three core capabilities. One team. Zero BS.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-2xl text-white mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm">
                  {solution.description}
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-xs text-gray-500 font-mono">Capabilities:</p>
                  <ul className="space-y-2">
                    {solution.capabilities.map((capability, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="text-green-400">›</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 font-mono mb-3">Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs font-mono border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', transition: { type: "spring", stiffness: 400, damping: 17 } }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-500 mb-4 font-mono text-sm">
            Need something custom? We build it.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('inquire');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors text-sm"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            Talk to us →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}