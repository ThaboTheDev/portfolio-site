import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center portfolio-hero-bg relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-portfolio-accent">Thabo Mlilo</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Mobile & Frontend Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I create beautiful, functional, and user-centered digital
              experiences that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-accent-foreground"
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/thabothedev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/thabo-mlilo-9678a1369"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="/Thabo_Mlilo_Resume.pdf" download>
                  <Download className="h-6 w-6" />
                  <span className="sr-only">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 bg-portfolio-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Crafting Digital Experiences
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With less than a year of experience in Mobile and Frontend Developement, I specialize
                in creating modern, responsive, and accessible applications
                using the latest technologies. I'm passionate about clean code,
                user experience, and bringing ideas to life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-accent mb-2">
                    5+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-accent mb-2">
                    1-
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-accent mb-2">
                    0
                  </div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}