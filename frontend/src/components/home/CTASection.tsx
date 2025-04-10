
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-bot-primary to-bot-secondary rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to transform your customer service?</span>
                <span className="block text-white/90">Get started with BotBuilder today.</span>
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-3xl">
                Join thousands of businesses that use BotBuilder to create AI-powered chatbots that engage customers, answer questions, and boost conversions.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-bot-primary hover:bg-white/90 text-lg px-8"
                  onClick={() => navigate('/create')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white/10 text-lg px-8"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="mt-3 text-sm text-white/80">
                No credit card required to start
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
