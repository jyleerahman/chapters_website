import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const posts = [
  {
    title: 'Building Real-time Data Pipelines with Kafka',
    description: 'How we process 100K events per second without breaking a sweat.',
    date: 'Nov 20, 2025',
    category: 'Data Engineering',
    readTime: '8 min read',
  },
  {
    title: 'RAG Systems in Production: What Actually Works',
    description: 'Lessons learned from shipping AI document processing at scale.',
    date: 'Nov 15, 2025',
    category: 'AI Engineering',
    readTime: '12 min read',
  },
  {
    title: 'Zero to Production in 6 Weeks: A Case Study',
    description: 'How we built and shipped a full analytics platform in a month and a half.',
    date: 'Nov 10, 2025',
    category: 'Full Stack',
    readTime: '6 min read',
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ cat blog/';
  const typingSpeed = 50;

  useEffect(() => {
    if (!isInView) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isInView, fullText]);

  return (
    <section id="blog" className="py-32 px-6 lg:px-12 relative overflow-hidden" ref={ref}>
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
            {isInView && displayedText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Writing & learnings
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Technical deep dives, war stories, and things we've learned building in production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs font-mono border border-white/10">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl text-white mb-3 group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <motion.button 
            className="px-6 py-3 bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors text-sm font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all posts →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}