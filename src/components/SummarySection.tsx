
import { Lightbulb } from 'lucide-react';

type SummarySectionProps = {
  summary: string;
};

const SummarySection = ({ summary }: SummarySectionProps) => {
  return (
    <section className="py-10 bg-resume-light/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title flex items-center mb-6">
          Professional Summary
        </h2>
        
        <div className="bg-resume-dark/70 p-6 rounded-lg border-l-4 border-resume-primary">
          <div className="flex gap-4">
            <div className="hidden md:flex">
              <div className="bg-resume-primary/20 p-3 rounded-full h-fit">
                <Lightbulb className="text-resume-primary w-6 h-6" />
              </div>
            </div>
            <p className="text-white leading-relaxed italic text-lg">{summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
