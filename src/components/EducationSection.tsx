
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
    <section className="py-10 bg-resume-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/80 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="w-20 h-20 bg-white/10 rounded-full p-1 flex-shrink-0 flex items-center justify-center border border-resume-primary/30">
                {education.logo ? (
                  <img 
                    src={education.logo} 
                    alt={education.school} 
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <GraduationCap className="w-8 h-8 text-resume-primary" />
                )}
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-white font-medium text-lg">{education.school}</h3>
                <p className="text-resume-primary mb-1">{education.degree}</p>
                <p className="text-gray-300 text-sm">{education.fieldOfStudy}</p>
                {education.period && (
                  <p className="text-gray-400 text-xs mt-2 bg-resume-primary/10 inline-block px-2 py-1 rounded-full">
                    {education.period}
                  </p>
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
