
import MainLayout from '@/components/layouts/MainLayout';
import ChatbotPreview from '@/components/preview/ChatbotPreview';

const PreviewPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-heading">Your Chatbot</span> is Ready!
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preview your chatbot, make customizations, and get the code to deploy it on your website.
          </p>
        </div>
        
        <ChatbotPreview />
      </div>
    </MainLayout>
  );
};

export default PreviewPage;
