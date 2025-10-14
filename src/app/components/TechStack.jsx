'use client';
import { FiLayout } from 'react-icons/fi';
import { FaServer } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { LuBraces, LuDatabase } from 'react-icons/lu';

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend',
      icon: FiLayout,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Next.js', level: 60 },
        { name: 'React.js', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: FaServer,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: LuDatabase,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: FaCode,
      color: 'from-pink-500 to-red-500',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: LuBraces,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 60 },
        { name: 'C', level: 60 }
      ]
    },
  ];

  return (
    <section id="tech-stacks" className="min-h-screen flex items-center bg-gradient-to-b from-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Framer Motion', 'Redux', 'Material-UI', 'Vercel', 'Figma'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 cursor-default hover:scale-110">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}