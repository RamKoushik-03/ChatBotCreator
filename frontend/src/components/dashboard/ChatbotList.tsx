
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Edit, ExternalLink, MoreHorizontal, Plus, Trash } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

// Mock data
const chatbots = [
  {
    id: '1',
    name: 'Customer Support Bot',
    status: 'active',
    interactions: 1254,
    successRate: 92,
    lastUpdated: '2025-04-02',
  },
  {
    id: '2',
    name: 'Sales Assistant',
    status: 'active',
    interactions: 876,
    successRate: 88,
    lastUpdated: '2025-04-01',
  },
  {
    id: '3',
    name: 'Product Explainer',
    status: 'inactive',
    interactions: 324,
    successRate: 95,
    lastUpdated: '2025-03-28',
  },
];

const ChatbotList = () => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Chatbots</CardTitle>
          <CardDescription>Manage and monitor your AI assistants</CardDescription>
        </div>
        <Button onClick={() => navigate('/create')} className="gradient-button">
          <Plus size={16} className="mr-2" />
          New Chatbot
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Interactions</TableHead>
              <TableHead className="hidden md:table-cell">Success Rate</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chatbots.map((bot) => (
              <TableRow key={bot.id}>
                <TableCell className="font-medium">{bot.name}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div 
                      className={`w-2 h-2 rounded-full mr-2 ${
                        bot.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    ></div>
                    <span className="capitalize">{bot.status}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{bot.interactions.toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{bot.successRate}%</TableCell>
                <TableCell className="hidden md:table-cell">{bot.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => navigate('/preview')}>
                        <ExternalLink size={16} className="mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit size={16} className="mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BarChart size={16} className="mr-2" />
                        Analytics
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash size={16} className="mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-500">Showing 3 chatbots</p>
      </CardFooter>
    </Card>
  );
};

export default ChatbotList;
