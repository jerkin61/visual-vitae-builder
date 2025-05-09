
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
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
                <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-resume-primary text-sm line-clamp-1 mb-3">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex justify-between items-center">
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
