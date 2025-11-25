import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function CircuitBoard() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsHovering(true);
    };

    // Track mouse on window level so it works everywhere
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Set hovering to false when mouse leaves the window
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Generate unique ID for this instance to avoid conflicts
  const patternId = `circuit-grid-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
    >
      {/* Base Circuit Board Background Pattern - Always visible at low opacity */}
      <div className="absolute inset-0" style={{ width: '100vw', height: '100%' }}>
        <svg className="w-full h-full" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={patternId} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Grid lines */}
              <line x1="0" y1="0" x2="0" y2="120" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="120" y2="0" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="0.5" />
              <line x1="60" y1="0" x2="60" y2="120" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="0.5" />
              <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="0.5" />
              
              {/* Connection nodes */}
              <circle cx="0" cy="0" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="60" cy="0" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="120" cy="0" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="0" cy="60" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="60" cy="60" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="120" cy="60" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="0" cy="120" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="60" cy="120" r="2" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="120" cy="120" r="2" fill="rgba(34, 197, 94, 0.6)" />
              
              {/* Connection lines */}
              <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
              <line x1="60" y1="0" x2="60" y2="60" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
              <line x1="0" y1="60" x2="60" y2="60" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
              <line x1="60" y1="60" x2="120" y2="60" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
              <line x1="60" y1="60" x2="60" y2="120" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
              <line x1="120" y1="0" x2="120" y2="60" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity="0.25" />
        </svg>
      </div>

      {/* Enhanced Circuit Board Pattern - Only visible in small circle around mouse */}
      {isHovering && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            width: '100vw', 
            height: '100%',
            clipPath: `circle(30px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-full h-full" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        </motion.div>
      )}
      
      {/* Spotlight effect - Pure light glow following mouse */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: '220px',
            height: '220px',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.25) 30%, rgba(34, 197, 94, 0.1) 60%, transparent 100%)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

