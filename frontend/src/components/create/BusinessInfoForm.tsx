import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const formSchema = z.object({
  businessName: z.string().min(2, { message: 'Business name is required' }),
  businessType: z.string().min(1, { message: 'Business type is required' }),
  description: z.string().min(10, { message: 'Business description should be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const BusinessInfoForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      description: '',
    },
  });

  const createChatBot = async (description: string) => {
    try {
      const submitResponse = await axios.post(`${API_BASE_URL}/submit-info`, {
        info: description,
      });

      console.log('Submit Info Response:', submitResponse.data);

      // const testQuestion = 'What is this business about?';
      // const chatResponse = await axios.post(`${API_BASE_URL}/submit-info`, {
      //   question: testQuestion,
      // });

      // console.log('Chat Response:', chatResponse.data);
      toast({
        title: 'Chatbot created successfully!',
        description: 'Your chatbot is ready.',
      });
    } catch (error) {
      console.error('Error interacting with the chatbot API:', error);
      toast({
        title: 'Error',
        description: 'Failed to create chatbot. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const onSubmit = (data: FormValues) => {
    createChatBot(data.description);
    navigate('/preview');
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create Your AI Chatbot</CardTitle>
        <CardDescription>
          Provide information about your business to generate a customized chatbot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {activeStep === 1 && (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your business name" {...field} />
                      </FormControl>
                      <FormDescription>This will be displayed in the chatbot header.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="retail">Retail / E-commerce</SelectItem>
                          <SelectItem value="service">Service Business</SelectItem>
                          <SelectItem value="saas">SaaS / Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="restaurant">Restaurant / Food</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Helps us customize responses for your industry.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe what your business does, your products, services, etc."
                          className="h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a comprehensive description of your business, products, and services.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <CardFooter className="flex justify-between">
              {activeStep > 1 && (
                <Button variant="outline" onClick={() => setActiveStep(activeStep - 1)}>
                  Previous
                </Button>
              )}
              {activeStep < 2 ? (
                <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
              ) : (
                <Button type="submit">Create Chatbot</Button>
              )}
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BusinessInfoForm;
