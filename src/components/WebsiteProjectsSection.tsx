import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const websiteProjects = [
  {
    id: 1,
    title: "REZAZ",
    description: "A modern e-commerce website with elegant design and user-friendly interface. Built with responsive design principles for optimal user experience.",
    technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    url: "https://kumailx051.github.io/ECOMMERCE-WEBSITE/"
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "A comprehensive online shopping platform with modern design and intuitive navigation. Features product catalog, shopping cart, and user management.",
    technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    url: "https://kumailx051.github.io/"
  },
  {
    id: 3,
    title: "TICTACTOE Game",
    description: "An interactive Tic Tac Toe game built with React. Features modern UI design, smooth animations, and engaging gameplay experience.",
    technologies: ["React"],
    url: "https://kumailx051.github.io/TicTacToe-ReactApp/"
  }
];

const WebsiteProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Website <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our web development projects showcasing modern design and functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Website
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteProjectsSection;