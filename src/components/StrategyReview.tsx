import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function StrategyReview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem_description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('strategy_reviews')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', problem_description: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="strategy-review" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-4">
            Free Expert Strategy Review
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Let us analyze your current position and provide actionable insights to accelerate your growth
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37] p-8 text-center animate-fade-in">
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-white mb-2">
              Thank You for Your Submission
            </h3>
            <p className="text-white/70">
              We'll review your information and get back to you within 24 hours with a comprehensive strategy overview.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-neutral-950/50 backdrop-blur-sm border border-[#D4AF37]/20 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 text-white focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 text-white focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="problem_description" className="block text-sm font-medium text-white/90 mb-2">
                    Describe Your Challenge
                  </label>
                  <textarea
                    id="problem_description"
                    name="problem_description"
                    value={formData.problem_description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 text-white focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your company, website, and the main challenges you're facing..."
                  />
                </div>

                {error && (
                  <div className="bg-red-900/20 border border-red-500/50 p-4 text-red-200 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Strategy Review'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
