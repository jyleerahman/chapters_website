import { Code2, Database, Brain, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const team = [
  {
    name: 'Alex Chen',
    role: 'Data Engineer',
    location: 'SF',
    specialty: 'Real-time pipelines',
    icon: Database,
  },
  {
    name: 'Jordan Park',
    role: 'AI Engineer',
    location: 'NYC',
    specialty: 'RAG systems',
    icon: Brain,
  },
  {
    name: 'Sam Rivera',
    role: 'Full Stack Engineer',
    location: 'Remote',
    specialty: 'Next.js & TypeScript',
    icon: Code2,
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ whoami';
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
    <section id="team" className="py-32 px-6 lg:px-12 relative overflow-hidden" ref={ref}>
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
            The team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Esoteric engineers who've shipped at scale. No agencies. No contractors. 
            Just people who know how to build.
          </p>
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 font-mono text-sm text-gray-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            <motion.span 
              className="text-yellow-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            We're actively recruiting
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1, transition: { type: "spring", stiffness: 200, damping: 15 } }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl text-white mb-2">
                  {member.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 font-mono">
                  {member.role}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-1 font-mono">Specialty:</p>
                  <p className="text-sm text-gray-300">{member.specialty}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div 
          className="bg-white/5 border border-white/10 p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-3xl">
            <h3 className="text-2xl text-white mb-6">
              Who we are
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>
                We're not a traditional agency. We're engineers who got tired of slow-moving 
                teams and decided to build differently.
              </p>
              <p>
                We care about craft. We read papers. We experiment with new tech on weekends. 
                We believe the best code is code that ships.
              </p>
              <p className="font-mono text-sm text-gray-500">
                $ echo "Move fast. Build things. Don't break prod."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}