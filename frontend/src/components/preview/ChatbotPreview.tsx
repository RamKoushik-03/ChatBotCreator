import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Settings, Code, ExternalLink, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import axios from 'axios';


interface Message {
  role: 'user' | 'bot';
  content: string;
}

const embedCode = `
<script src="chat.js"></script>
`;




const ChatbotPreview = () => {
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode);
    toast({ title: "Embed code copied to clipboard" });
  };
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hello! I'm your business assistant. How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState('');
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: 'user', content: userInput }]);

    try {
      // const response = await axios.post('http://127.0.0.1:5000/chat',{question:"This is my ques"
      const response = await axios.post('http://127.0.0.1:5000/chat', {
        question: userInput, 
      });

      if (response.data?.answer) {
        setMessages((prev) => [...prev, { role: 'bot', content: response.data.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', content: "Sorry, I couldn't find an answer. Please try again." },
        ]);
      }
    } catch (error) {
      console.error('Error communicating with the backend:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Sorry, there was an error. Please try again later.' },
      ]);
    }

    setUserInput(''); // Clear the input
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Tabs defaultValue="preview">
          <TabsList className="mb-6">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="animate-fade-in">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="bg-gradient-to-r from-bot-primary to-bot-secondary p-4 flex items-center justify-between">
                <div className="text-white font-semibold">Your Business Assistant</div>
                <div className="flex items-center space-x-2">
                  <button className="text-white/80 hover:text-white">
                    <Settings size={18} />
                  </button>
                  <button className="text-white/80 hover:text-white">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              
              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index} 
                    className={`max-w-[80%] mb-4 ${message.role === 'user' ? 'ml-auto' : ''}`}
                    >
                  
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-bot-primary text-white' 
                          : 'bg-white border border-gray-100 shadow-sm'
                      }`}
                      >
                      <p className="text-sm">{message.content}</p>
                    </div>
              </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-100 flex items-center">
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="ml-2 gradient-button"
                  disabled={!userInput.trim()}
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="customize" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="chatbot-name">Chatbot Name</Label>
                      <Input id="chatbot-name" defaultValue="Your Business Assistant" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="welcome-message">Welcome Message</Label>
                      <Input id="welcome-message" defaultValue="Hello! I'm your business assistant. How can I help you today?" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label>Chat Button Position</Label>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <Button variant="outline" className="border-bot-primary">Bottom Right</Button>
                        <Button variant="outline">Bottom Left</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label>Primary Color</Label>
                      <div className="grid grid-cols-5 gap-2 mt-1">
                        {['#0ea5e9', '#2563eb', '#8b5cf6', '#ec4899', '#f97316'].map((color) => (
                          <div 
                            key={color}
                            className="h-8 rounded-md cursor-pointer border border-gray-100"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-open">Auto-Open Chat</Label>
                        <Switch id="auto-open" />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Automatically open the chat after 5 seconds</p>
                    </div>
                    
                    <div>
                      <Label>Response Length</Label>
                      <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Concise</span>
                        <span>Detailed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button className="gradient-button">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="deploy" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Embed on Your Website</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Copy and paste this code snippet just before the closing &lt;/body&gt; tag of your website.
                    </p>
                    
                    <div className="relative">
                      <div className="bg-gray-50 rounded-md p-4 font-mono text-sm overflow-x-auto">
                        {embedCode}
                      </div>
                      <Button 
                        onClick={copyEmbedCode} 
                        className="absolute top-2 right-2"
                        size="sm"
                        variant="ghost"
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-medium mb-2">Direct Link</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Share this link to provide direct access to your chatbot in fullscreen mode.
                    </p>
                    
                    <div className="flex">
                      <Input defaultValue="chat.js" readOnly />
                      <Button 
                        onClick={() => {
                          navigator.clipboard.writeText("chat.js");
                          toast({ title: "Link copied to clipboard" });
                        }} 
                        className="ml-2"
                        variant="outline"
                      >
                        <Copy size={16} className="mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-medium mb-2">WordPress Plugin</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      If you're using WordPress, you can install our plugin for easy integration.
                    </p>
                    
                    <Button className="flex items-center">
                      <Code size={16} className="mr-2" />
                      Download Plugin
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChatbotPreview;