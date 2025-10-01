const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Free Strategy Review', href: '#strategy-review' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-4xl font-serif font-bold text-[#D4AF37] tracking-wider hover:text-[#E5C158] transition-colors duration-300"
          >
            ITC
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4AF37]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} ITC. All rights reserved.</p>
            <p className="font-light">Professional Marketing & Social Media Management</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
