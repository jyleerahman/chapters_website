import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'join', label: 'Join Us' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-white transition-opacity hover:opacity-60 font-mono"
          >
            {'>'} Chapters_
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('inquire')}
              className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('inquire')}
              className="w-full px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm"
            >
              Inquire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
