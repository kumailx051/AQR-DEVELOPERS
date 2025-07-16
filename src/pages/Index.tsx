import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import WebsiteProjectsSection from '@/components/WebsiteProjectsSection';
import ContactSection from '@/components/ContactSection';
import ThreeBackground from '@/components/ThreeBackground';
import ParticleField from '@/components/ParticleField';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {!isMobile && <ParticleField />}
      {!isMobile && <ThreeBackground />}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <WebsiteProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
