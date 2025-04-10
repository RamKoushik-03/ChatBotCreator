
const testimonials = [
  {
    content: "BotBuilder has transformed how we handle customer inquiries. Our chatbot now handles 70% of our customer support questions, saving us countless hours.",
    author: "Sarah Johnson",
    role: "Customer Support Manager",
    company: "TechSolutions Inc."
  },
  {
    content: "Setting up our chatbot was surprisingly easy. Within an hour, we had a fully functional AI assistant that accurately represents our brand voice.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthHub"
  },
  {
    content: "The customization options are fantastic! We were able to tailor our chatbot to match our website design and personality perfectly.",
    author: "Emma Rodriguez",
    role: "Web Developer",
    company: "Creative Designs"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by <span className="gradient-heading">Businesses</span> Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers are saying about their experience with BotBuilder.
          </p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">"{testimonial.content}"</blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-bot-primary to-bot-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
