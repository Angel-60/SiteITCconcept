import { TrendingUp, Target, Award } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Social Media Growth & Management',
    description:
      'Strategic content creation and community engagement that drives measurable growth. We build authentic connections with your audience while maintaining brand consistency.',
  },
  {
    icon: Target,
    title: 'Marketing Strategy Design',
    description:
      'Data-driven marketing strategies tailored to your business objectives. We analyze, plan, and execute campaigns that deliver exceptional ROI.',
  },
  {
    icon: Award,
    title: 'Brand Development & Online Positioning',
    description:
      'Comprehensive brand identity development and strategic positioning that sets you apart. We craft narratives that resonate and build lasting market presence.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Comprehensive solutions designed to elevate your brand and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-serif font-semibold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
