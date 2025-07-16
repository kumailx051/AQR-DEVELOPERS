import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  percentage: number;
  category: 'coding' | 'professional';
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const codingSkills: Skill[] = [
    { name: 'Flutter', percentage: 90, category: 'coding' },
    { name: 'JavaScript', percentage: 88, category: 'coding' },
    { name: 'React', percentage: 85, category: 'coding' },
    { name: 'HTML', percentage: 95, category: 'coding' },
    { name: 'CSS', percentage: 90, category: 'coding' },
    { name: 'C++', percentage: 80, category: 'coding' },
    { name: 'MySQL', percentage: 85, category: 'coding' },
    { name: 'SQL', percentage: 82, category: 'coding' }
  ];

  const professionalSkills: Skill[] = [
    { name: 'SEO', percentage: 85, category: 'professional' },
    { name: 'Video Editing', percentage: 80, category: 'professional' },
    { name: 'Photoshop', percentage: 75, category: 'professional' },
    { name: 'Illustrator', percentage: 70, category: 'professional' },
    { name: 'PowerPoint', percentage: 90, category: 'professional' },
    { name: 'MS Office', percentage: 95, category: 'professional' },
    { name: 'Cybersecurity', percentage: 70, category: 'professional' },
    { name: 'Team Work', percentage: 95, category: 'professional' }
  ];

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

  const SkillBar = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-primary font-bold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'animate-skill-fill' : 'w-0'
          }`}
          style={{
            '--skill-width': `${skill.percentage}%`,
            animationDelay: `${delay}ms`,
            width: isVisible ? `${skill.percentage}%` : '0%'
          } as React.CSSProperties}
        />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coding Skills */}
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Coding Skills</h3>
              <div className="space-y-6">
                {codingSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={index * 200} 
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Professional Skills */}
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Skills</h3>
              <div className="space-y-6">
                {professionalSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={index * 200 + 600} 
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;