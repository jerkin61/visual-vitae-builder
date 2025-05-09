
import { MessageSquare, ArrowUp, ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  technologies?: string[];
  status?: string;
};

type PersonalProjectsSectionProps = {
  projects: Project[];
};

const PersonalProjectsSection = ({ projects }: PersonalProjectsSectionProps) => {
  return (
    <section className="py-12 bg-resume-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">
          Personal Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/80 rounded-lg overflow-hidden shadow-lg border border-resume-primary/30"
            >
              <div className="md:flex">
                <div className="md:w-1/3 p-6">
                  <div className="relative overflow-hidden rounded-lg h-full min-h-[220px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-resume-dark/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="secondary" 
                        className="bg-white/90 hover:bg-white text-resume-dark"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        Visit Project
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-white font-semibold text-2xl">{project.title}</h3>
                          {project.status && (
                            <Badge className="bg-resume-primary text-white">{project.status}</Badge>
                          )}
                        </div>
                        <a 
                          href={`https://${project.link}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-resume-primary hover:text-resume-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-resume-primary text-sm mb-4">{project.subtitle}</p>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="bg-resume-primary/20 text-white px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.technologies && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2 text-resume-primary">
                            <Code className="w-4 h-4" />
                            <span className="text-sm font-medium">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="border-resume-primary/30 text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-xs">User Comments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowUp className="w-4 h-4" />
                          <span className="text-xs">Upvoting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">20,000+ Questions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
