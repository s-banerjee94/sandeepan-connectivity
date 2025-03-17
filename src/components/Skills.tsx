
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "React", percentage: 90 },
    { name: "Angular", percentage: 88 },
    { name: "Node.js", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "MongoDB", percentage: 82 }
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.percentage} 
                    className="h-2 bg-slate-200 dark:bg-slate-700" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700"
                >
                  <p className="font-medium text-center text-slate-800 dark:text-slate-200">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Tools I Use</h3>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700">
              <ul className="grid grid-cols-2 gap-3 list-disc list-inside">
                <li className="text-slate-700 dark:text-slate-300">VS Code</li>
                <li className="text-slate-700 dark:text-slate-300">Git & GitHub</li>
                <li className="text-slate-700 dark:text-slate-300">Figma</li>
                <li className="text-slate-700 dark:text-slate-300">Postman</li>
                <li className="text-slate-700 dark:text-slate-300">Docker</li>
                <li className="text-slate-700 dark:text-slate-300">AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
