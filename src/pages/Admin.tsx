import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Upload, Eye, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { toast } = useToast();
  const [heroData, setHeroData] = useState({
    title: "Kumail Abbas",
    subtitle: "Full Stack Developer",
    description: "Passionate about creating innovative digital solutions"
  });

  const [aboutData, setAboutData] = useState({
    description: "I'm a passionate Full Stack Developer with expertise in modern web technologies...",
    experience: "2+ Years",
    projects: "15+",
    clients: "10+"
  });

  const handleSave = (section: string) => {
    // In a real app, this would save to a database
    localStorage.setItem(`portfolio-${section}`, JSON.stringify(section === 'hero' ? heroData : aboutData));
    toast({
      title: "Saved!",
      description: `${section} section has been updated successfully.`,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server
      toast({
        title: "Image Uploaded!",
        description: "Image has been uploaded successfully.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Portfolio Admin Panel</h1>
          <p className="text-muted-foreground">Manage your portfolio content and media</p>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="about">About Section</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Edit className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold">Edit Hero Section</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Main Title</Label>
                  <Input
                    id="hero-title"
                    value={heroData.title}
                    onChange={(e) => setHeroData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={heroData.subtitle}
                    onChange={(e) => setHeroData(prev => ({ ...prev, subtitle: e.target.value }))}
                    placeholder="Your Role"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero-description">Description</Label>
                  <Textarea
                    id="hero-description"
                    value={heroData.description}
                    onChange={(e) => setHeroData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description about yourself"
                    rows={3}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={() => handleSave('hero')} className="bg-gradient-primary">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => window.open('/', '_blank')}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Edit className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold">Edit About Section</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="about-description">About Description</Label>
                  <Textarea
                    id="about-description"
                    value={aboutData.description}
                    onChange={(e) => setAboutData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Detailed description about yourself"
                    rows={5}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      value={aboutData.experience}
                      onChange={(e) => setAboutData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="2+ Years"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projects">Projects</Label>
                    <Input
                      id="projects"
                      value={aboutData.projects}
                      onChange={(e) => setAboutData(prev => ({ ...prev, projects: e.target.value }))}
                      placeholder="15+"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clients">Clients</Label>
                    <Input
                      id="clients"
                      value={aboutData.clients}
                      onChange={(e) => setAboutData(prev => ({ ...prev, clients: e.target.value }))}
                      placeholder="10+"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={() => handleSave('about')} className="bg-gradient-primary">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => window.open('/', '_blank')}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Edit className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold">Manage Projects</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Project management functionality would be implemented here. 
                  This would allow adding, editing, and removing projects from the portfolio.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 border-dashed border-2 border-border">
                    <h3 className="font-semibold mb-2">Mobile App Projects</h3>
                    <p className="text-sm text-muted-foreground">6 projects currently displayed</p>
                    <Button variant="outline" className="mt-2 w-full">Edit Mobile Projects</Button>
                  </Card>
                  
                  <Card className="p-4 border-dashed border-2 border-border">
                    <h3 className="font-semibold mb-2">Website Projects</h3>
                    <p className="text-sm text-muted-foreground">3 projects currently displayed</p>
                    <Button variant="outline" className="mt-2 w-full">Edit Website Projects</Button>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="media">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Upload className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold">Media Management</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image-upload">Upload Images</Label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Supported formats: JPG, PNG, GIF (Max size: 5MB)
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {/* Sample media grid */}
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;