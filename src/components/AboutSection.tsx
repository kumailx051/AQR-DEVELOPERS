import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import pandaImage from '@/assets/panda-dev.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Meeeeeee</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Card className="p-8 bg-card border-border shadow-card">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full border-4 border-primary/30 overflow-hidden">
                  <img 
                    src={pandaImage} 
                    alt="About Me" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-glow-pulse"></div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-foreground">Flutter Developer!</h3>
              </div>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced Flutter Developer with expertise in keyword research, on-page optimization, 
                and technical SEO strategies to enhance website performance. I utilize analytical tools 
                to identify and implement effective SEO tactics with a proven track record of improving 
                search engine rankings and increasing organic traffic through data-driven methods.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a Flutter Developer at Ninjas Code and have experience as a Lead 
                Developer at Codexcue. My expertise spans across mobile app development, web technologies, 
                and database management systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about creating efficient, user-friendly applications and continuously 
                expanding my knowledge in emerging technologies including cybersecurity, video editing, 
                and cloud platforms.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 shadow-glow"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
