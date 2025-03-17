
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Sandeepan</h3>
            <p className="text-slate-300 mb-4">
              Full-Stack Developer passionate about creating meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <strong className="text-blue-400">Email:</strong> contact@connectwithsandeepan.in
              </li>
              <li className="text-slate-300">
                <strong className="text-blue-400">Phone:</strong> +91 98765 43210
              </li>
              <li className="text-slate-300">
                <strong className="text-blue-400">Location:</strong> India
              </li>
              <li className="text-slate-300">
                <strong className="text-blue-400">Freelance:</strong> Available
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-400">
            © {currentYear} <span className="text-blue-400">connectwithsandeepan.in</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
