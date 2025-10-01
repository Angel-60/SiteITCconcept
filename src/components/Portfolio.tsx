import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Project One',
    category: 'Social Media Campaign',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Project Two',
    category: 'Brand Development',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Project Three',
    category: 'Marketing Strategy',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Project Four',
    category: 'Digital Transformation',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Project Five',
    category: 'Content Strategy',
    image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Project Six',
    category: 'Social Media Growth',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            A showcase of successful campaigns and transformative brand strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-2">
                  <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Placeholder for project description and key results achieved.
                </p>

                <div className="flex items-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-sm font-medium mr-2">View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
