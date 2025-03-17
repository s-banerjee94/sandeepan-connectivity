
import { Card, CardContent } from "@/components/ui/card";
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
    { name: "HTML & CSS", tag: "Frontend", color: "bg-orange-500" },
    { name: "JavaScript", tag: "Frontend", color: "bg-yellow-500" },
    { name: "TypeScript", tag: "Frontend", color: "bg-blue-500" },
    { name: "React", tag: "Frontend", color: "bg-cyan-500" },
    { name: "Angular", tag: "Frontend", color: "bg-red-500" },
    { name: "Node.js", tag: "Backend", color: "bg-green-500" },
    { name: "PostgreSQL", tag: "Database", color: "bg-indigo-500" },
    { name: "MongoDB", tag: "Database", color: "bg-emerald-500" }
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
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-1.5 ${skill.color}`}></div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </p>
                    <span className="inline-block mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {skill.tag}
                    </span>
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
                  <Card 
                    key={skill.name} 
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="flex flex-col items-center gap-3 p-6">
                      <span className="text-3xl">{skill.icon}</span>
                      <p className="font-medium text-center text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
              <Card className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-5">
                    {tools.map((tool) => (
                      <div key={tool.name} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="text-2xl mb-1">{tool.icon}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
