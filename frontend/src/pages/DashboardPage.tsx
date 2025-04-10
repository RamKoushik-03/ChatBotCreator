
import MainLayout from '@/components/layouts/MainLayout';
import ChatbotList from '@/components/dashboard/ChatbotList';
import AnalyticsSummary from '@/components/dashboard/AnalyticsSummary';

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-heading">Dashboard</span>
          </h1>
          <p className="text-gray-600">
            Manage your chatbots and track their performance
          </p>
        </div>
        
        <div className="space-y-10">
          <ChatbotList />
          <AnalyticsSummary />
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
