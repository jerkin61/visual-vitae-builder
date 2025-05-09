
import { Briefcase } from 'lucide-react';

type Experience = {
  period: string;
  location: string;
  company: string;
  title: string;
  description: string[];
  logo: string;
};

type ExperienceSectionProps = {
  experiences: Experience[];
};

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Experience
        </h2>

        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left Side - Logo and Company Info */}
                <div className="md:w-1/4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                      <img 
                        src={experience.logo} 
                        alt={experience.company}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white text-sm">{experience.period}</p>
                      <p className="text-gray-400 text-xs">◆ {experience.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-white font-medium">{experience.title}</h3>
                    <p className="text-resume-primary">{experience.company}</p>
                  </div>
                </div>

                {/* Right Side - Description */}
                <div className="md:w-3/4">
                  <div className="bg-resume-dark/70 p-4 rounded-lg">
                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;
