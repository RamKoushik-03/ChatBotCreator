
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </MainLayout>
  );
};

export default HomePage;
