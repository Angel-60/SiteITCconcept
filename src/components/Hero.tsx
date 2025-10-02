export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-[#D4AF37] mb-6 tracking-wide">
            ITC
          </h1>

          <div className="w-32 h-0.5 bg-[#D4AF37] mx-auto mb-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            Professional Solutions in Marketing & Social Media Management
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Veterans in the industry, delivering cost-effective strategies that adapt perfectly to your needs.
            Experience the difference that expertise, professionalism, and dedication can make.
          </p>

          <button
            onClick={() => scrollToSection('#strategy-review')}
            className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-all duration-300 overflow-hidden active:scale-95"
          >
            <span className="relative z-10">Get Your Free Strategy Review</span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#services')}
          className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
