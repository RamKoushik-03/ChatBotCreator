
import { Bot, Code, Globe, Settings } from 'lucide-react';

const features = [
  {
    name: 'Create',
    description: 'Build a custom chatbot by providing information about your business, products, and services.',
    icon: Bot,
  },
  {
    name: 'Customize',
    description: "Fine-tune your chatbot's appearance, behavior, and responses to match your brand identity.",
    icon: Settings,
  },
  {
    name: 'Deploy',
    description: 'Seamlessly integrate your chatbot into your website with just a simple code snippet.',
    icon: Code,
  },
  {
    name: 'Connect',
    description: 'Engage with visitors 24/7, answer questions, and convert prospects into customers.',
    icon: Globe,
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="gradient-heading">Simple Process</span> to Create Your Chatbot
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow our easy step-by-step process to create, customize, and deploy your AI-powered chatbot in minutes.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.name} className="relative">
              <div className="absolute left-0 top-0 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-bot-primary to-bot-secondary shadow-lg">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="ml-4">
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bot-light text-bot-primary font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
