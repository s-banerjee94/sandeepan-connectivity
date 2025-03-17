
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400">Hello, I'm</span><br />
              Sandeepan
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              Full-Stack Developer specializing in creating engaging digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-72 h-72 md:w-80 md:h-80 mx-auto overflow-hidden shadow-xl">
              {/* You can add your profile image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
