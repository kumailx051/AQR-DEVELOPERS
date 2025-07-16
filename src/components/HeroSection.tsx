import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import pandaImage from '@/assets/panda-dev.png';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const typewriterTexts = [
    'Freelance Development Team',
    'Flutter Developer',
    'Website Developer', 
    'App Developer',
    'React Native Developer'
  ];
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[88px] md:pt-0" style={{ paddingTop: 'max(env(safe-area-inset-top), 88px)' }}>
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              We are <span className="text-primary">AQR Developers</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium min-h-[3rem] flex items-center">
              <TypewriterText texts={typewriterTexts} speed={80} delay={2000} />
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Expert team offering Flutter & React Native app development, plus modern website solutions. 
              We turn your ideas into reality with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-morph bg-gradient-morph hover:scale-105 text-primary-foreground px-8 py-3 shadow-intense animate-gradient-morph transition-all duration-300 hover:shadow-intense"
              onClick={() => window.open('https://wa.me/923141966731', '_blank')}
            >
              Hire Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 hover:border-primary px-8 py-3 backdrop-blur-glass bg-white/5 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Talk
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <span onClick={() => window.open('https://www.linkedin.com/in/aqr-developers-632006372', '_blank')} style={{ cursor: 'pointer' }}>
                <Linkedin className="h-5 w-5" />
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Panda Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-morph bg-gradient-morph rounded-full blur-3xl animate-gradient-morph opacity-30"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-glow-pulse"></div>
            <img 
              src={pandaImage} 
              alt="Panda Developer" 
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain rounded-full hover:scale-105 transition-transform duration-500"
            />
            {/* Enhanced decorative elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-float shadow-glow"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-primary-glow rounded-full animate-float delay-500 shadow-glow"></div>
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-primary rounded-full animate-float delay-1000 shadow-glow"></div>
            <div className="absolute top-8 left-1/3 w-2 h-2 bg-accent rounded-full animate-float delay-300 shadow-glow"></div>
            <div className="absolute bottom-4 right-1/3 w-3 h-3 bg-secondary rounded-full animate-float delay-700 shadow-glow"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-glass border border-primary/30">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;