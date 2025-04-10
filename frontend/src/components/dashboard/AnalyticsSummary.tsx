
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, BarChartHorizontal, LineChart, PieChart } from 'lucide-react';
import { ResponsiveContainer, LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart as ReBarChart, Bar } from 'recharts';

// Mock data for charts
const interactionData = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 150 },
  { name: 'Wed', value: 180 },
  { name: 'Thu', value: 210 },
  { name: 'Fri', value: 190 },
  { name: 'Sat', value: 130 },
  { name: 'Sun', value: 110 },
];

const topQuestionsData = [
  { name: 'Business Hours', value: 35 },
  { name: 'Pricing', value: 28 },
  { name: 'Return Policy', value: 22 },
  { name: 'Shipping', value: 18 },
  { name: 'Contact Info', value: 15 },
];

const AnalyticsSummary = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,454</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <span>↑ 12% from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <span>↓ 0.3s from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.5%</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <span>↑ 2.3% from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Chatbots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-blue-600 flex items-center mt-1">
              <span>3 total chatbots</span>
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart size={18} className="mr-2 text-gray-500" />
              Daily Interactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={interactionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Interactions" 
                    stroke="#0ea5e9" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2} 
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChartHorizontal size={18} className="mr-2 text-gray-500" />
              Top Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={topQuestionsData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#888888" />
                  <YAxis dataKey="name" type="category" stroke="#888888" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" name="Count" fill="#2563eb" radius={[0, 4, 4, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsSummary;
