'use client';
import { SlBriefcase } from 'react-icons/sl';
import { IoCalendarOutline } from 'react-icons/io5';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Web Developer Intern',
      company: 'Sash Info Services Pvt Ltd, Bangalore, India',
      period: 'May 2022 - Present',
      description: 'Independently developed a Timesheet Manager web application using Next.js and Tailwind CSS. Handled the entire project lifecycle from design to deployment, ensuring responsive UI, efficient data handling, and smooth user experience.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      role: 'Full Stack Web Developer Intern',
      company: 'Naval Software Solutions, Bhubaneswar, Odisha, India',
      period: 'Feb 2020 - May 2022',
      description: 'Worked as a Backend Engineer on a major Hospital Management System project, building RESTful APIs using Node.js and Express.js. Also contributed multiple responsive web projects, collaborating on live client applications to enhance functionality and user experience.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'MongoDB'],
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">My professional journey and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-slate-800 z-10 animate-pulse"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2 justify-start">
                        <IoCalendarOutline size={18} />
                        <span className="text-sm font-semibold">{exp.period}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-left">{exp.role}</h3>

                      <div className="flex items-center gap-2 mb-4 justify-start">
                        <SlBriefcase size={18} className="text-blue-400" />
                        <span className="text-blue-400 font-semibold">{exp.company}</span>
                      </div>

                      <p className="text-gray-300 mb-4 text-left leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-900/80 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}