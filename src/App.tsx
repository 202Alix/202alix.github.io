import { useState, useEffect } from 'react';
import LogoUrl from './assets/logo.png';

interface Project {
  name: string;
  path: string;
  description: string;
  previewImage?: string;
}

const projects: Project[] = [
  {
    name: 'ResizeMe',
    path: '/tlltd-converter',
    description: 'Upload an image and the app will convert it to match the color palette and canvas size of the Tomodachi drawing boards.',
    previewImage: '/Logo_ResizeMe.svg'
  },
];

export default function App() {
  const [availableProjects, setAvailableProjects] = useState<Project[]>(projects);

  useEffect(() => {
    // Check for available subdomains dynamically
    const checkProjects = async () => {
      const checked: Project[] = [];
      
      for (const project of projects) {
        try {
          const response = await fetch(project.path);
          if (response.ok) {
            checked.push(project);
          }
        } catch {
          // Project not available
        }
      }
      
      setAvailableProjects(checked.length > 0 ? checked : projects);
    };

    checkProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] flex flex-col">
      {/* Navigation Header */}
      <header className="border-b border-[#fdfefe]/10 py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LogoUrl} alt="202Alix Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-white">202Alix</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#projects" className="text-[#fdfefe]/70 hover:text-[#fdfefe] transition-colors">
              Projects
            </a>
            <a href="https://github.com/202alix" target="_blank" rel="noopener noreferrer" className="text-[#fdfefe]/70 hover:text-[#fdfefe] transition-colors">
              GitHub
            </a>
            <a
              href="https://ko-fi.com/L4L51YB9IR"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#72a4f2',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px'
              }}
            >
              Support me on Ko-fi
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to my projects page!
          </h2>
          <p className="text-xl text-[#fdfefe]/70 mb-8 leading-relaxed">
            I'm a graphic designer by profession but do make some other things from time to time, check it out below :)
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-[#060606] font-medium rounded hover:opacity-90 transition-opacity"
            >
              Explore Projects
            </a>
            <a
              href="https://github.com/202alix"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#fdfefe]/30 text-white font-medium rounded hover:border-[#fdfefe] transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-24 w-full border-t border-[#fdfefe]/10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 border border-[#fdfefe] flex items-center justify-center">
              <p className="text-sm font-medium text-[#fdfefe]">01</p>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Projects</h3>
          </div>
          <p className="text-lg text-[#fdfefe]/70 ml-12">
            Explore my latest work and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableProjects.map((project) => (
            <a
              key={project.path}
              href={project.path}
              className="group"
            >
              <div className="relative p-8 border border-[#fdfefe]/10 rounded-lg hover:border-[#fdfefe]/30 transition-all duration-300 bg-[#0a0a0a] hover:bg-[#141414]">
                {/* Preview Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  {project.previewImage && (
                    <img
                      src={project.previewImage}
                      alt={`${project.name} logo`}
                      className="w-10 h-10 flex-shrink-0 object-contain"
                    />
                  )}
                  <h4 className="text-xl font-bold text-white">
                    {project.name}
                  </h4>
                </div>
                
                <p className="text-[#fdfefe]/60 text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-[#fdfefe]/50 group-hover:text-[#fdfefe]/70 transition-colors">
                  <span>Visit Project</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {availableProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#fdfefe]/50 text-lg">Coming soon...</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#fdfefe]/10 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#fdfefe]/50 text-sm text-center">
            © 2025 202Alix. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
