'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription =
    'I\'m a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences. With expertise in modern web technologies, I transform ideas into elegant, functional applications that users love.'

  const fullDescription =
    'I\'m a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences. With expertise in modern web technologies, I transform ideas into elegant, functional applications that users love.\n\nMy journey in tech began with curiosity and evolved into a deep commitment to crafting high-quality software. I specialize in building responsive, user-centric applications using cutting-edge frameworks and best practices. Whether it\'s architecting scalable backend systems or designing intuitive user interfaces, I approach every project with creativity and precision.\n\nWhen I\'m not coding, you\'ll find me exploring new technologies, contributing to open - source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of industry trends to deliver innovative solutions that make a real impact.'

  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 z-10"></div>
              {/* <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Workspace"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              /> */}
              <Image
                src="/about-section-img.jpg"
                alt="Workspace"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1+</div>
                <div className="text-sm text-cyan-100">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-cyan-100">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Crafting Digital <span className="text-cyan-400">Excellence</span>
            </h3>

            {/* Animated Description */}
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-4">
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.8, 0.25, 1], // smooth "premium" easing curve
                    }}
                    className="overflow-hidden"
                  >
                    {fullDescription.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p>{shortDescription}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Read More / Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
            >
              {isExpanded ? (
                <>
                  Read Less
                  <FaChevronUp size={14} className="group-hover:animate-bounce" />
                </>
              ) : (
                <>
                  Read More
                  <FaChevronDown size={14} className="group-hover:animate-bounce" />
                </>
              )}
            </button>

            {/* Skills Quick View */}
            <div className="pt-4 flex flex-wrap gap-3">
              {["Next.js", "React.js", "Node.js", "Tailwind CSS", "MongoDB"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}