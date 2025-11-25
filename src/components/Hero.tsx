import { Terminal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ status: accepting_new_clients';
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
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
  }, []);

  const scrollToInquire = () => {
    const element = document.getElementById('inquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 relative overflow-hidden">
      {/* Grid Background Effect */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        animate={{
          backgroundPosition: ['0px 0px', '64px 64px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      ></motion.div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="max-w-5xl">
          {/* Terminal-style badge */}
          <motion.div 
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="font-mono text-green-400 text-sm">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Build<br/>
            <span className="text-gray-500">different.</span>
          </motion.h1>
          
          <div className="max-w-2xl space-y-6 mb-12">
            <motion.p 
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're a collective of esoteric engineers shipping production-grade data infrastructure, 
              AI systems, and full-stack applications for startups that move fast.
            </motion.p>
            <motion.div 
              className="flex items-start gap-2 font-mono text-sm text-gray-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
              <span>No agencies. No junior devs. Just cracked engineers who build.</span>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToInquire}
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {'>'} Start a project
            </motion.button>
            <motion.button
              onClick={scrollToSolutions}
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              {'>'} View capabilities
            </motion.button>
          </motion.div>

          {/* Terminal Output Effect */}
          <motion.div 
            className="mt-24 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="font-mono text-sm text-gray-500 space-y-2">
              {[
                'Data pipelines running at scale',
                'AI systems in production',
                'Zero to shipped in weeks, not months'
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + (i * 0.1) }}
                >
                  <span className="text-green-400">●</span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}