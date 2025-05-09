
import { GraduationCap } from 'lucide-react';

type Education = {
  school: string;
  logo: string;
  degree: string;
  fieldOfStudy: string;
  period?: string;
};

type EducationSectionProps = {
  educations: Education[];
};

const EducationSection = ({ educations }: EducationSectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/70 p-4 rounded-lg flex flex-col md:flex-row items-start gap-4"
            >
              <div className="w-16 h-16 bg-white rounded-full p-1 flex-shrink-0 flex items-center justify-center">
                <img 
                  src={education.logo} 
                  alt={education.school} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              <div>
                <h3 className="text-white font-medium">{education.school}</h3>
                <p className="text-resume-primary mb-1">{education.degree}</p>
                <p className="text-gray-300 text-sm">{education.fieldOfStudy}</p>
                {education.period && (
                  <p className="text-gray-400 text-xs mt-2">{education.period}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
