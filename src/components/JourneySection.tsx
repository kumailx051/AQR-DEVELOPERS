import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

const JourneySection = () => {
  const educationData = [
    {
      degree: "BS Information Technology",
      institution: "Bahria University E-8 Islamabad",
      period: "Feb 2022 – Present",
      description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database management, and modern programming technologies."
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "ROOTS COLLEGE (Willington Campus)",
      period: "Completed",
      description: "Pre-Engineering studies providing strong foundation in mathematics, physics, and analytical thinking essential for technology careers."
    }
  ];

  const experienceData = [
    {
      position: "Flutter Developer",
      company: "Ninjas Code",
      period: "Dec 2024 – Present",
      description: "Working as a Flutter Developer, developing cross-platform mobile applications using Flutter framework and Dart programming language."
    },
    {
      position: "Lead Developer",
      company: "Codexcue",
      period: "Previous Role",
      description: "Led development projects, managed team coordination, and implemented best practices in software development lifecycle."
    }
  ];

  const certificationsData = [
    { name: "JavaScript Certificate", issuer: "Educative" },
    { name: "Google Developer Group Participation", issuer: "Google" },
    { name: "Google Cloud Certificate", issuer: "Simpli Learn" },
    { name: "Flutter Completion Certificate", issuer: "Official" },
    { name: "React JS Certificate", issuer: "Official" },
    { name: "Cisco C++ Certificate", issuer: "Cisco" },
    { name: "SQL Certificate", issuer: "Solo Learn" },
    { name: "DSA Project Certificate (2nd Position)", issuer: "Bahria University" }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h4>
                      <p className="text-primary font-medium mb-1">{item.institution}</p>
                      <p className="text-accent font-medium mb-2 text-sm">{item.period}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.position}</h4>
                      <p className="text-primary font-medium mb-1">{item.company}</p>
                      <p className="text-accent font-medium mb-2 text-sm">{item.period}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <Card key={index} className="p-4 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-primary font-medium text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;