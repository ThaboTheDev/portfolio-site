import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar } from "lucide-react";

export default function About() {
  const skills = [
    "Python", "SQLite", "Docker", "Material-UI", "Figma", "Git",
    "Flutter", "Dart", "Java", "Junit", "Firebase", "Flame", "Socket Programming", "Sales"
  ];

  const experiences = [
    {
      title: "Mobile & Frontend Developer",
      company: "LX Nexus",
      location: "Johannesburg, Gauteng",
      period: "2025 - Present",
      description: "Leading development of the modile and desktop applications for Lexi Drift AI and, creating the Tech-Stack for Drift."
    },
    {
      title: "Sales Agent",
      company: "Ak Mobile",
      location: "Johannesburg, Gauteng",
      period: "2023 - 2023",
      description: "Sold Phones and Laptops, alongside doing lead warming for 1 Life Insurance"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 portfolio-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Passionate developer with a love for creating exceptional digital experiences
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image Placeholder */}
              <div className="animate-slide-in-right">
                <div className="relative">
                  <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/5 rounded-2xl border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 mx-auto mb-4 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-3xl">👨‍💻</span>
                      </div>
                      <p>Profile Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="animate-slide-up">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Hello! I'm Thabo Mlilo
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate Junior developer with less tnan 1 year of experience 
                    creating Mobile applications and software that solve problems. My journey 
                    started with a Software Engeneering Diploma, but my true education comes 
                    from constantly learning and adapting to new technologies.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating user 
                    experiences that are both beautiful and functional. When I'm not 
                    coding, you can find me exploring new technologies, contributing to 
                    open source projects, in the gym, or serving at TRSH.
                  </p>
                  <p>
                    I'm always excited to work on challenging projects and collaborate 
                    with teams that share my passion for creating exceptional digital products.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Johannesburg, Gauteng</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Available for work</span>
                  </div>
                </div>

                <Button className="mt-6" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-portfolio-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="animate-fade-in">
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Work Experience
              </h2>
              <p className="text-muted-foreground">
                My professional journey and key milestones
              </p>
            </div>

            <div className="space-y-8 animate-fade-in">
              {experiences.map((exp, index) => (
                <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-portfolio-accent font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                        <div className="flex items-center gap-1 sm:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:justify-end mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}