
type Skill = {
  category: string;
  items: string[];
};

type SkillsSectionProps = {
  skills: Skill[];
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-resume-dark/70 p-4 rounded-lg">
              <h3 className="text-white font-medium mb-4 text-center">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillCategory.items.map((skill, idx) => (
                  <span key={idx} className="skill-pill text-sm">
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
