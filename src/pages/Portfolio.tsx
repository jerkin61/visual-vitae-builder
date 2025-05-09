
import { ExternalLink, Eye, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  status?: string;
};

const Portfolio = () => {
  // Data for portfolio projects
  const projects: Project[] = [
    {
      title: "HRIS Management System",
      subtitle: "HRIS System including request (payroll, attendance...), tracking (time in/out), compliance, employee request(s), information dissemination",
      description: "A comprehensive HRIS management system with multiple modules for employee management and HR operations.",
      image: "/placeholder.svg",
      link: "hris.filgro.com",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      status: "Completed"
    },
    {
      title: "Leasing Management Software",
      subtitle: "Leasing management software including dashboard (agent, landlord and admin), asset management, real-time tracking",
      description: "Advanced leasing management platform for property management companies and landlords.",
      image: "/placeholder.svg",
      link: "www.spekapps.com",
      technologies: ["React", "Node.js", "MongoDB", "Material UI"],
      status: "Ongoing"
    },
    {
      title: "Philippine Consulate Website",
      subtitle: "WordPress website for the Philippine Consulate with custom theme and content management",
      description: "A professional government website with custom WordPress theme, content management, and official documentation handling.",
      image: "/placeholder.svg",
      link: "dev-phil-consulate.fld3.xyz",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      status: "Deployed"
    },
    {
      title: "Fast Events",
      subtitle: "Event management WordPress site with online booking and registration system",
      description: "Custom WordPress website for event management and online registration with payment processing and ticketing system.",
      image: "/placeholder.svg",
      link: "fastevents.com.au",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Custom Plugins"],
      status: "Live"
    },
    {
      title: "Shopify Website",
      subtitle: "Ecommerce Shopify site - created a custom checkout for finding the right fit for client through creating a Shopify App",
      description: "Custom Shopify implementation with specialized checkout flow and product pages.",
      image: "/placeholder.svg",
      link: "sway-co.com",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
      status: "Deployed"
    },
    {
      title: "ExamRefresher.com",
      subtitle: "Free exam practice platform for professionals and students",
      description: "A community-driven platform featuring over 20,000 practice questions across different categories and professional exams. Users can answer questions, add comments, reply to discussions, and upvote helpful content — all completely free with no ads.",
      image: "/placeholder.svg",
      link: "examrefresher.com",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Tailwind CSS"],
      status: "Active Development"
    }
  ];

  return (
    <div className="min-h-screen bg-resume-dark">
      {/* Header */}
      <header className="bg-resume-dark/80 border-b border-resume-primary/20 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Portfolio</h1>
          <p className="text-resume-primary mt-2">A showcase of my most significant projects and works</p>
        </div>
      </header>

      {/* Portfolio Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-resume-dark/80 rounded-lg overflow-hidden shadow-lg group transition-all duration-300 hover:translate-y-[-5px] border border-resume-primary/20"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-resume-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="outline" 
                      className="bg-white/80 hover:bg-white border-none"
                      onClick={() => window.open(`https://${project.link}`, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    {project.status && (
                      <Badge className="bg-resume-secondary text-white text-xs">{project.status}</Badge>
                    )}
                  </div>
                  <p className="text-resume-primary text-sm line-clamp-1 mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {project.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="border-resume-primary/20 text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-2">
                    <a 
                      href={`https://${project.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-resume-primary hover:underline text-sm"
                    >
                      <span className="mr-1">Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-resume-dark py-8 border-t border-resume-primary/20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Jerquin Bayudo. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">
            This portfolio was designed to showcase both professional experience and creative design abilities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
