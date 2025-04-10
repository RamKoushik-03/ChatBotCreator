
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-dot-pattern">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="lg:flex lg:items-center lg:gap-8">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              <span className="gradient-heading">Empower Your Business</span> with a Custom AI Chatbot
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Create, customize, and deploy AI chatbots tailored to your business needs in minutes. No coding required.
            </p>
            <div className="mt-10 flex gap-4">
              <Button 
                size="lg" 
                className="gradient-button text-lg px-8"
                onClick={() => navigate('/create')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-bot-primary text-bot-primary hover:bg-bot-light"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-bot-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-bot-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-gray-900">Business Assistant</div>
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm text-gray-700">Hi! I'm your business assistant. How can I help you today?</p>
                    </div>
                    <div className="bg-bot-primary p-3 rounded-lg max-w-[80%] ml-auto">
                      <p className="text-sm text-white">What are your business hours?</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm text-gray-700">Our business hours are Monday-Friday from 9am to 5pm, and Saturday from 10am to 2pm. We're closed on Sundays.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 text-sm"
                    />
                    <button className="bg-bot-primary text-white py-2 px-4 rounded-r-md text-sm">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
