
import { ExternalLink } from 'lucide-react';

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
          Recent projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/70 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-resume-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {project.link.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, '')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
