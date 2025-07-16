import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Shiffters",
    description: "A modern mobile application showcasing smooth animations and responsive design. Built with cutting-edge technologies to deliver an exceptional user experience.",
    technologies: ["Flutter", "Dart", "Firebase", "Python"],
    url: "https://kumailx051.github.io/Shiffters/",
    credentials: null
  },
  {
    id: 2,
    title: "RAABTA",
    description: "A comprehensive communication platform with real-time messaging and secure authentication. Features modern UI design and seamless user experience.",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://kumailx051.github.io/Raabta/#/authPage",
    credentials: [
      { role: "User", email: "kumail@gmail.com", password: "kumail123" }
    ]
  },
  {
    id: 3,
    title: "Gupshup",
    description: "An interactive chat application with modern design and real-time communication features. Built for seamless messaging experience.",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://kumailx051.github.io/Gupshup/",
    credentials: [
      { role: "User", email: "kumail@gmail.com", password: "kumail123" }
    ]
  },
  {
    id: 4,
    title: "QuickHelp",
    description: "A service platform connecting users with domestic workers. Features intuitive design, job management, and user-friendly interface.",
    technologies: ["React Native", "Firebase", "Python"],
    url: null,
    credentials: null,
    images: [
      "/lovable-uploads/4a52a7d2-2b11-47db-814e-63b23115d393.png",
      "/lovable-uploads/a3aa95d1-5760-4a33-b67e-cf969c3ecf4a.png",
      "/lovable-uploads/38ee0185-d227-45be-b198-aa04ec8301b1.png",
      "/lovable-uploads/2a3f4750-c312-4a29-85c7-15d48ffe0092.png",
      "/lovable-uploads/474a8f23-6468-4752-90e3-143a4c8cbf40.png",
      "/lovable-uploads/31912d17-4999-480f-88b4-d2546f5060e1.png"
    ]
  },
  {
    id: 5,
    title: "Transport App",
    description: "A comprehensive transportation management system with user and driver interfaces. Features real-time tracking, booking management, and secure authentication.",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://kumailx051.github.io/TransportApp",
    credentials: [
      { role: "User", email: "user@gmail.com", password: "user123" },
      { role: "Driver", email: "driver@gmail.com", password: "driver123", vehicle: "driver" }
    ]
  },
  {
    id: 6,
    title: "Transport App Admin",
    description: "Administrative dashboard for transport management system. Comprehensive control panel for managing users, drivers, vehicles, and analytics.",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://kumailx051.github.io/TransportAppAdmin",
    credentials: [
      { role: "Admin", email: "admin@gmail.com", password: "admin123" }
    ]
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(0); // Reset image index when changing projects
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(0); // Reset image index when changing projects
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const project = projects[currentProject];

return (
    <section ref={sectionRef} id="projects" className="py-12 md:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">Mobile App Projects:</h3>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore our latest work and see how we bring ideas to life
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Project Info */}
          <div className={`w-full lg:w-1/2 space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'} order-2 lg:order-1`}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
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

                {project.credentials && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Test Profiles:</h4>
                    <div className="space-y-2">
                      {project.credentials.map((cred, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg border border-border">
                          <p className="text-sm font-medium text-foreground">{cred.role}:</p>
                          <p className="text-xs text-muted-foreground">Email: {cred.email}</p>
                          <p className="text-xs text-muted-foreground">Password: {cred.password}</p>
                          {cred.vehicle && <p className="text-xs text-muted-foreground">Vehicle: {cred.vehicle}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.url && (
                  <Button 
                    className="mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Mobile Mockup with Navigation */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center gap-2 md:gap-4 ${isVisible ? 'animate-fade-in animate-float' : 'opacity-0'} order-1 lg:order-2`}>
            {/* Previous Arrow */}
            <Button
              variant="outline"
              className="shrink-0 bg-card/80 backdrop-blur-sm border-border hover:bg-primary/20 transition-colors flex items-center gap-2 px-2 md:px-4"
              onClick={prevProject}
              disabled={isAnimating}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden md:inline">Previous Project</span>
            </Button>

            {/* Phone Container */}
            <div className="relative overflow-hidden">
              <div className={`relative transition-transform duration-300 ${isAnimating ? 'transform -translate-x-full' : 'transform translate-x-0'}`}>
                {/* Cleaner Phone Frame */}
                <div className="relative w-48 h-[380px] md:w-60 md:h-[480px] lg:w-72 lg:h-[580px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] p-1 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden">
                     {/* Screen Content */}
                     <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                       {project.images ? (
                         <div className="w-full h-full relative bg-gray-100">
                           <img
                             key={`${project.id}-${currentImageIndex}`}
                             src={project.images[currentImageIndex]}
                             alt={`${project.title} Screenshot ${currentImageIndex + 1}`}
                             className="w-full h-full object-contain"
                           />
                           {/* Image Navigation Arrows */}
                           {project.images.length > 1 && (
                             <>
                               <button
                                 onClick={prevImage}
                                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                               >
                                 <ChevronLeft className="w-3 h-3" />
                               </button>
                               <button
                                 onClick={nextImage}
                                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                               >
                                 <ChevronRight className="w-3 h-3" />
                               </button>
                               {/* Image Indicators */}
                               <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                 {project.images.map((_, index) => (
                                   <button
                                     key={index}
                                     className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                       index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                                     }`}
                                     onClick={() => setCurrentImageIndex(index)}
                                   />
                                 ))}
                               </div>
                             </>
                           )}
                         </div>
                       ) : (
                         <iframe
                           key={project.id}
                           src={project.url}
                           className="w-full h-full border-0"
                           title={`${project.title} Project`}
                           loading="lazy"
                         />
                       )}
                     </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-slate-600 rounded-full"></div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-xl rounded-[2.5rem] -z-10"></div>
              </div>
            </div>

            {/* Next Arrow */}
            <Button
              variant="outline"
              className="shrink-0 bg-card/80 backdrop-blur-sm border-border hover:bg-primary/20 transition-colors flex items-center gap-2 px-2 md:px-4"
              onClick={nextProject}
              disabled={isAnimating}
            >
              <span className="text-sm font-medium hidden md:inline">Next Project</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Project Indicators - Hidden on mobile */}
          <div className="absolute -bottom-8 md:bottom-4 left-1/2 transform -translate-x-1/2 md:flex gap-1 md:gap-2 hidden">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;