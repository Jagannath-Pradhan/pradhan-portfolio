'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LuDownload } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Web Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl text-cyan-400 font-semibold animate-fade-in">
                Hi
                <motion.span
                  className="ml-1"
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                >
                  👋
                </motion.span>
                , I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-fade-in">
                Jagannath Pradhan
              </h1>
              <div className="h-12 sm:h-16">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {text}
                  <span className="animate-pulse">|</span>
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl animate-fade-in">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              I bring ideas to life through clean code and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <a
                href="https://wa.me/8338901176?text=Hi%20Pradhan!%20I'm%20interested%20in%20your%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaWhatsapp size={20} />
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="jagannath-pradhan-resume.pdf" download="jagannath-pradhan-resume.pdf" className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <LuDownload size={20} />
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-800">
                <Image src={"/my-image.png"} alt="Profile" fill className="object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}