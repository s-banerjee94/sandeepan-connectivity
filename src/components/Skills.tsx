
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
    
    return () => {
      if (skillsSection) observer.disconnect();
    };
  }, []);

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
    { name: "Problem Solving", icon: "💡" },
    { name: "Communication", icon: "🗣️" },
    { name: "Teamwork", icon: "👥" },
    { name: "Time Management", icon: "⏱️" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Critical Thinking", icon: "🧠" }
  ];

  const tools = [
    { name: "VS Code", icon: "📝" },
    { name: "Git & GitHub", icon: "🔄" },
    { name: "Figma", icon: "🎨" },
    { name: "Postman", icon: "📮" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={isVisible ? skill.percentage : 0} 
                      className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-all duration-1000 ease-out" 
                    />
                    <div 
                      className="absolute top-0 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out opacity-40"
                      style={{ width: `${isVisible ? skill.percentage : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <p className="font-medium text-center text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="grid grid-cols-3 gap-5">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <span className="text-2xl mb-1">{tool.icon}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
