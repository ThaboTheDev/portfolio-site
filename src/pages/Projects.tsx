import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AdventureGame",
      description:
        "A terminal based adventure game made with dart, it's made to showcase my OOP skills and my passion in Gamification",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Makefile", "CI/CD", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://gitlab.com/ThaboTheDev/AdventureGame",
      featured: true,
    },
    {
      id: 2,
      title: "Manga Domain",
      description:
        "A fullstack application for manga lover, that uses MangaDex API for a robust manga library",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "MangaDex API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Dynasty-Ventures-Consortium/manga_domain",
      featured: true,
    },
    {
      id: 3,
      title: "Java Simple TCP Chat Room",
      description:
        "A Terminal based chat room, with socket programming, that allow user to join chat rooms and have conversations.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Maven", "Sockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://gitlab.com/ThaboTheDev/java_simple_tcp_chat_room",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 portfolio-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills in Mobile and Frontend Developement, 
              from concept to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Highlighting some of my most impactful work
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group border border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-portfolio-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Other Projects
            </h2>
            <p className="text-muted-foreground">
              Additional projects and experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group border border-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-12 h-12 mx-auto mb-2 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">💻</span>
                    </div>
                    <p className="text-xs">Preview</p>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
