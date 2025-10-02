import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    position: 'CEO, TechVenture Inc.',
    content:
      'ITC transformed our social presence with cost-effective, professional solutions. Results came faster than expected, and their team adapted perfectly to our unique needs.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    position: 'Founder, Digital Horizon',
    content:
      'Working with ITC has been exceptional. Their expertise reduced our marketing costs by 40% while doubling engagement. True veterans who deliver on every promise.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    position: 'Marketing Director, Luxe Brands',
    content:
      'The professionalism and attention to detail are unmatched. ITC brought strategic insights that positioned our brand perfectly in a competitive market. Highly recommended.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    position: 'VP Operations, Growth Solutions',
    content:
      'ITC delivered quality work with remarkable efficiency. Their strategic approach and deep industry knowledge made them an invaluable partner in our digital transformation.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-light px-4">
            Trusted by industry leaders who value excellence and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-neutral-950/50 backdrop-blur-sm border border-[#D4AF37]/20 p-6 sm:p-8 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-[#D4AF37]" />
              </div>

              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-white/80 mb-6 leading-relaxed italic font-light">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-[#D4AF37]/20 pt-4">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-[#D4AF37] text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
