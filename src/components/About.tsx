
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I'm a passionate Full-Stack Developer with expertise in building responsive web applications and 
              digital experiences that leave an impact. With a strong foundation in both frontend and backend technologies,
              I create solutions that are both visually appealing and functionally robust.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              My journey in web development started 5 years ago, and since then I've worked on various projects
              ranging from small business websites to complex enterprise applications. I believe in writing clean,
              maintainable code and staying updated with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-xl mb-2">Education</h3>
                <div className="flex items-start">
                  <GraduationCap className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300">Bachelor's in Computer Science</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Experience</h3>
                <div className="flex items-start">
                  <Briefcase className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300">5+ Years in Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Personal Details</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3">
                <p className="font-medium text-blue-600 dark:text-blue-400">Name:</p>
                <p className="col-span-2 text-slate-700 dark:text-slate-300">Sandeepan</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="font-medium text-blue-600 dark:text-blue-400">Email:</p>
                <p className="col-span-2 text-slate-700 dark:text-slate-300">contact@connectwithsandeepan.in</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="font-medium text-blue-600 dark:text-blue-400">From:</p>
                <p className="col-span-2 text-slate-700 dark:text-slate-300">India</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="font-medium text-blue-600 dark:text-blue-400">Languages:</p>
                <p className="col-span-2 text-slate-700 dark:text-slate-300">English, Hindi</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="font-medium text-blue-600 dark:text-blue-400">Freelance:</p>
                <p className="col-span-2 text-slate-700 dark:text-slate-300">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
