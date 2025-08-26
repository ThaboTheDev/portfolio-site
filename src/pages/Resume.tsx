import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

export default function Resume() {
  const workExperience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: [
        "Led development of scalable web applications serving 100K+ users",
        "Mentored team of 5 junior developers and improved code quality by 40%",
        "Architected microservices infrastructure reducing deployment time by 60%",
        "Implemented CI/CD pipelines and automated testing strategies"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Ventures",
      location: "New York, NY",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Developed responsive web applications improving user engagement by 40%",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Optimized application performance reducing load times by 50%",
        "Built reusable component library adopted across 3 product teams"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Styled Components"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Solutions",
      location: "Remote",
      period: "Jun 2019 - Feb 2020",
      description: [
        "Built and maintained client projects using modern web technologies",
        "Participated in agile development processes and code reviews",
        "Implemented RESTful APIs and database integrations",
        "Gained experience in full-stack development and DevOps practices"
      ],
      technologies: ["JavaScript", "Python", "PostgreSQL", "Git"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "California, USA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      achievements: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 semesters",
        "Computer Science Student of the Year 2019"
      ]
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Code Academy Pro",
      location: "Online",
      period: "2019",
      gpa: "Top 5%",
      achievements: [
        "Completed 600+ hours of intensive training",
        "Built 15+ projects including capstone project",
        "Received certification in Modern Web Development"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      id: "AWS-CSA-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      id: "GCP-PD-002"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "2022",
      id: "CKA-003"
    }
  ];

  const skills = {
    "Frontend": ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Material-UI"],
    "Backend": ["Node.js", "Python", "Express", "Django", "GraphQL", "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
    "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform"],
    "Tools": ["Git", "Jest", "Cypress", "Figma", "Postman", "Jira"]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 portfolio-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional experience, education, and qualifications
            </p>
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Work Experience */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-portfolio-accent" />
                <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
              </div>

              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <Card key={index} className="border border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg text-foreground">
                            {job.title}
                          </CardTitle>
                          <p className="text-portfolio-accent font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground sm:text-right">
                          <div className="flex items-center gap-1 sm:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:justify-end mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-muted-foreground">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-portfolio-accent" />
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-portfolio-accent font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            GPA: {edu.gpa}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground sm:text-right">
                          <div className="flex items-center gap-1 sm:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:justify-end mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="animate-slide-in-right">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-portfolio-accent" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-medium text-foreground mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Certifications */}
            <section className="animate-slide-in-right">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-portfolio-accent" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-medium text-foreground text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-portfolio-accent">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.date} • ID: {cert.id}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}