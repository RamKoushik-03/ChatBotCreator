
import MainLayout from '@/components/layouts/MainLayout';
import BusinessInfoForm from '@/components/create/BusinessInfoForm';

const CreatePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-heading">Build Your Bot</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us about your business and we'll create a custom AI chatbot that can answer 
            questions, provide support, and engage with your customers 24/7.
          </p>
        </div>
        
        <BusinessInfoForm />
      </div>
    </MainLayout>
  );
};

export default CreatePage;
