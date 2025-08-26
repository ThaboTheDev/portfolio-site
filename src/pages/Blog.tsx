import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Server Components",
      excerpt: "Explore the new React Server Components and how they can improve your application's performance and user experience.",
      content: "React Server Components represent a paradigm shift in how we think about React applications...",
      tags: ["React", "Performance", "Next.js"],
      author: "John Doe",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt: "Learn best practices for creating maintainable and scalable backend services using Node.js and TypeScript.",
      content: "When building APIs that need to scale, choosing the right architecture and tools is crucial...",
      tags: ["Node.js", "TypeScript", "API Design"],
      author: "John Doe",
      publishDate: "2024-01-08",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
      content: "CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes...",
      tags: ["CSS", "Frontend", "Layout"],
      author: "John Doe",
      publishDate: "2024-01-01",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Deploying Applications with Docker and Kubernetes",
      excerpt: "Step-by-step guide to containerizing your applications and deploying them using Kubernetes.",
      content: "Container orchestration has become essential for modern application deployment...",
      tags: ["Docker", "Kubernetes", "DevOps"],
      author: "John Doe",
      publishDate: "2023-12-20",
      readTime: "15 min read",
      featured: false
    },
    {
      id: 5,
      title: "State Management in React: Redux vs Zustand",
      excerpt: "Comparing different state management solutions for React applications and their use cases.",
      content: "Choosing the right state management solution can significantly impact your application's maintainability...",
      tags: ["React", "State Management", "Redux"],
      author: "John Doe",
      publishDate: "2023-12-10",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 6,
      title: "Database Design Principles for Web Applications",
      excerpt: "Essential database design principles that every web developer should know for building efficient applications.",
      content: "Good database design is the foundation of any successful web application...",
      tags: ["Database", "PostgreSQL", "Design"],
      author: "John Doe",
      publishDate: "2023-12-01",
      readTime: "11 min read",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 portfolio-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Blog & Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development, 
              technology trends, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-muted-foreground">
              In-depth articles on topics I'm passionate about
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <p className="text-sm">Article Preview</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-portfolio-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full group">
                    <Link to={`/blog/${post.id}`}>
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-portfolio-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent Articles
            </h2>
            <p className="text-muted-foreground">
              Latest thoughts and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group border border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.publishDate)}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-portfolio-accent transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full group">
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                More Content Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly writing new articles about web development, best practices, 
                and the latest technologies. Subscribe to stay updated!
              </p>
              <Button asChild>
                <Link to="/contact">
                  Get Notified
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}