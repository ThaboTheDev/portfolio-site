import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

export default function Resume() {
  const workExperience = [
    {
      title: "Mobile & Frontend Developer",
      company: "LX Nexus",
      location: "Johannesburg, Gauteng",
      period: "July 2025 - Present",
      description: [
        "Leading development of the modile and desktop applications for Lexi Drift AI",
        "Creating the Tech-Stack for Drift.",
        "Creating the UI for the Lexi Drift.",
        "Implemented CI/CD pipelines and automated testing strategies",
      ],
      technologies: ["Flutter", "Python", "Docker", "REST API"],
    },
    {
      title: "Sales Agent",
      company: "AK Mobile",
      location: "Johannesburg, Gauteng",
      period: "jan 2023 - Aug 2023",
      description: [
        "Sold Mobile phones and Laptops via Telephone.",
        "Lead warming for 1 Life Insurance.",
      ],
      technologies: ["Communication", "Sales", "Customer Support"],
    },
  ];

  const education = [
    {
      degree: "Diploma of Software Engineering",
      institution: "WeThinkCode",
      location: "Rosebank, Gauteng",
      period: "2024 - Present",
      gpa: "Incompete",
      achievements: [
        "Peer Mentor for fellow students.",
        "Achieved 91.717% for 1st year.",
        "In final year"
      ]
    },
    {
      degree: "National Senior Certificate",
      institution: "Phoenix College of Johannesburg",
      location: "Johannesburg, Gauteng",
      period: "2022 - 2023",
      gpa: "None",
      achievements: [
        "Completed Matric.",
        "Built a colunteering app for my IT project.",
        "Received certification of completion."
      ]
    }
  ];

  const certifications = [
    {
      name: "Certificate in Full Stack Developement",
      issuer: "FNB App Academy",
      date: "2025",
      id: "AOTYAA072025"
    },
    // {
    //   name: "Google Cloud Professional Developer",
    //   issuer: "Google Cloud",
    //   date: "2022",
    //   id: "GCP-PD-002"
    // },
    // {
    //   name: "Certified Kubernetes Administrator",
    //   issuer: "CNCF",
    //   date: "2022",
    //   id: "CKA-003"
    // }
  ];

  const skills = {
    "Frontend": ["Flutter", "HTML/CSS", "Material-UI"],
    "Backend": ["Python", "REST APIs", "Dart", "Java"],
    "Database": ["MySQL", "Access DB", "SQLite"],
    "DevOps": ["Docker", "CI/CD", "MakeFile"],
    "Tools": ["Git", "Maven", "Bash"]
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
              <a href="/Thabo_Mlilo_Resume.pdf" download>
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