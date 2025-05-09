
import { Award } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

type CertificationsSectionProps = {
  certifications: Certification[];
};

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  if (!certifications.length) return null;
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Certifications & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <div 
              key={index} 
              className="bg-resume-dark/70 p-4 rounded-lg flex items-start gap-4"
            >
              <div className="bg-resume-primary/20 p-2 rounded-full">
                <Award className="text-resume-primary w-5 h-5" />
              </div>
              
              <div>
                <h3 className="text-white font-medium">{certification.title}</h3>
                <p className="text-resume-primary text-sm mb-1">{certification.issuer}</p>
                <p className="text-gray-400 text-xs">{certification.date}</p>
                {certification.description && (
                  <p className="text-gray-300 text-sm mt-2">{certification.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
