import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: 'Dolorem Ipsum',
    href: 'tel:',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Dolorem Ipsum',
    href: 'mailto:',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Dolorem Ipsum',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Ready to elevate your brand? Contact us to discuss your project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 p-8 md:p-12">
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Dolorem Ipsum</h3>
              <p className="text-white/70 font-light">
                Your trusted partner in marketing and social media excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-6 bg-neutral-950/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>

                  <h4 className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider mb-2">
                    {info.label}
                  </h4>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white/80">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-[#D4AF37]/20 text-center">
              <p className="text-white/70 mb-6 font-light">
                Looking for a comprehensive strategy review? Submit your information above and we'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#strategy-review');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
              >
                Request Free Strategy Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
