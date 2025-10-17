'use client';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Food Delivery App',
      description: 'A feature-rich food delivery web app offering seamless browsing, ordering, and checkout experiences. Built with modern technologies to ensure fast performance, responsive design, and a user-friendly interface.',
      image: '/dash-dine.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      live: '#',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Subhadra Yojna Clone App',
      description: 'A clone of the Odisha Government’s women empowerment initiative, developed with a Mobile-First Approach for accessibility and usability. Focused on creating an engaging and responsive interface inspired by the original platform.',
      image: '/subhadra-yojna-clone.png',
      technologies: ['React.js', 'Bootstrap'],
      github: '#',
      live: '#',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Naval S/W Clone App',
      description: 'A fully responsive single-page clone project built using HTML, CSS, Bootstrap, and AOS for smooth scrolling animations. Carefully designed to deliver a modern, sleek UI and highly optimized user experience across all devices.',
      image: '/naval-sw-clone.png',
      technologies: ['HTML', 'CSS', 'AOS', 'Bootstrap'],
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  width={600}
                  height={600}
                />

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a href={project.github} className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-110">
                    <FiGithub size={24} className="text-white" />
                  </a>
                  {/* <a href={project.live} className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-110">
                    <FiExternalLink size={24} className="text-white" />
                  </a> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center mt-12">
          <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            <span className="flex items-center gap-2">
              View All Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
}