
import { ExternalLink, Eye, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  status?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Portfolio
        </h2>
        
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300 text-sm">Showcasing selected client projects</p>
          <a 
            href="/portfolio" 
            className="text-resume-primary hover:underline text-sm flex items-center gap-1"
          >
            View all projects <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/80 rounded-lg overflow-hidden shadow-lg group transition-all duration-300 hover:translate-y-[-5px]"
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
                    onClick={() => window.open(project.link, '_blank')}
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
                    href={project.link} 
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
  );
};

export default ProjectsSection;
