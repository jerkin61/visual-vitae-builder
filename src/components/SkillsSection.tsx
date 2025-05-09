
type Skill = {
  category: string;
  items: string[];
};

type SkillsSectionProps = {
  skills: Skill[];
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="py-10 bg-resume-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-resume-dark/80 p-6 rounded-lg border-t border-resume-primary/30">
              <h3 className="text-white font-medium mb-4 text-center relative pb-2">
                {skillCategory.category}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-resume-primary"></span>
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillCategory.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="skill-pill text-sm transition-all hover:bg-resume-primary/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
