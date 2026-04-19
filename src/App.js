import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const projects = [
    {
        name: 'TLLTD Converter',
        path: '/tlltd-converter',
        description: 'A simple and intuitive tool for converting images to Tamagotchi-style avatars',
        preview: '🎮'
    },
];
export default function App() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [availableProjects, setAvailableProjects] = useState(projects);
    useEffect(() => {
        // Check for available subdomains dynamically
        const checkProjects = async () => {
            const checked = [];
            for (const project of projects) {
                try {
                    const response = await fetch(project.path);
                    if (response.ok) {
                        checked.push(project);
                    }
                }
                catch {
                    // Project not available
                }
            }
            setAvailableProjects(checked.length > 0 ? checked : projects);
        };
        checkProjects();
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-[#060606] flex flex-col", children: [_jsx("header", { className: "border-b border-[#fdfefe]/10 py-6 px-4 md:px-8 lg:px-16", children: _jsxs("div", { className: "max-w-[1440px] mx-auto flex items-center justify-between", children: [_jsx("h1", { className: "text-2xl font-bold text-white", children: "Alix" }), _jsxs("nav", { className: "flex gap-6", children: [_jsx("a", { href: "#projects", className: "text-[#fdfefe]/70 hover:text-[#fdfefe] transition-colors", children: "Projects" }), _jsx("a", { href: "https://github.com/202alix", target: "_blank", rel: "noopener noreferrer", className: "text-[#fdfefe]/70 hover:text-[#fdfefe] transition-colors", children: "GitHub" })] })] }) }), _jsx("section", { className: "flex-1 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32 w-full", children: _jsxs("div", { className: "max-w-2xl", children: [_jsx("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-6 leading-tight", children: "Creative Developer & Designer" }), _jsx("p", { className: "text-xl text-[#fdfefe]/70 mb-8 leading-relaxed", children: "Welcome to my digital space. I create tools, experiments, and interactive experiences with modern web technologies." }), _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsx("a", { href: "#projects", className: "px-6 py-3 bg-white text-[#060606] font-medium rounded hover:opacity-90 transition-opacity", children: "Explore Projects" }), _jsx("a", { href: "https://github.com/202alix", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-3 border border-[#fdfefe]/30 text-white font-medium rounded hover:border-[#fdfefe] transition-colors", children: "View on GitHub \u2192" })] })] }) }), _jsxs("section", { id: "projects", className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-24 w-full border-t border-[#fdfefe]/10", children: [_jsxs("div", { className: "mb-16", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-8 h-8 border border-[#fdfefe] flex items-center justify-center", children: _jsx("p", { className: "text-sm font-medium text-[#fdfefe]", children: "01" }) }), _jsx("h3", { className: "text-4xl md:text-5xl font-bold text-white", children: "Projects" })] }), _jsx("p", { className: "text-lg text-[#fdfefe]/70 ml-12", children: "Explore my latest work and tools" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: availableProjects.map((project) => (_jsx("a", { href: project.path, onMouseEnter: () => setHoveredProject(project.path), onMouseLeave: () => setHoveredProject(null), className: "group", children: _jsxs("div", { className: "relative p-8 border border-[#fdfefe]/10 rounded-lg hover:border-[#fdfefe]/30 transition-all duration-300 bg-[#0a0a0a] hover:bg-[#141414] cursor-pointer", children: [project.preview && (_jsx("div", { className: "text-5xl mb-4 transition-transform duration-300 group-hover:scale-110", children: project.preview })), _jsx("h4", { className: "text-2xl font-bold text-white mb-3 group-hover:text-white/90", children: project.name }), _jsx("p", { className: "text-[#fdfefe]/60 text-base leading-relaxed", children: project.description }), _jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm text-[#fdfefe]/50 group-hover:text-[#fdfefe]/70", children: [_jsx("span", { children: "Visit Project" }), _jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "\u2192" })] })] }) }, project.path))) }), availableProjects.length === 0 && (_jsx("div", { className: "text-center py-12", children: _jsx("p", { className: "text-[#fdfefe]/50 text-lg", children: "Coming soon..." }) }))] }), _jsx("footer", { className: "border-t border-[#fdfefe]/10 py-12 px-4 md:px-8 lg:px-16", children: _jsx("div", { className: "max-w-[1440px] mx-auto", children: _jsx("p", { className: "text-[#fdfefe]/50 text-sm text-center", children: "\u00A9 2025 Alix. Built with React & Tailwind CSS" }) }) })] }));
}
