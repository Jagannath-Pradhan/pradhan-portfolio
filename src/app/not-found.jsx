'use client'
import { useEffect, useState } from 'react';
import { LuZap } from 'react-icons/lu';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [glitchActive, setGlitchActive] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particle positions on client only
        const generatedParticles = Array.from({ length: 20 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 10,
        }));
        setParticles(generatedParticles);
    }, []);


    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex items-center justify-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

                {/* Floating Particles */}
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float opacity-0 animate-fade-in"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`
                        }}
                    ></div>

                ))}

            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* 404 Number with Parallax */}
                <div
                    className="relative mb-8"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                >
                    <h1
                        className={`text-[150px] sm:text-[200px] lg:text-[280px] font-black leading-none ${glitchActive ? 'animate-glitch' : ''
                            }`}
                        style={{
                            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 80px rgba(6, 182, 212, 0.3)'
                        }}
                    >
                        404
                    </h1>

                    {/* Glitch Overlay */}
                    {glitchActive && (
                        <>
                            <h1
                                className="absolute inset-0 text-[150px] sm:text-[200px] lg:text-[280px] font-black leading-none opacity-70"
                                style={{
                                    background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    transform: 'translate(-5px, -5px)'
                                }}
                            >
                                404
                            </h1>
                            <h1
                                className="absolute inset-0 text-[150px] sm:text-[200px] lg:text-[280px] font-black leading-none opacity-70"
                                style={{
                                    background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    transform: 'translate(5px, 5px)'
                                }}
                            >
                                404
                            </h1>
                        </>
                    )}
                </div>

                {/* Error Message */}
                <div className="space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm">
                        <LuZap size={18} className="text-red-400" />
                        <span className="text-red-400 text-sm font-semibold">Page Not Found</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Oops! This Page Went to the{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Digital Void
                        </span>
                    </h2>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                    <button
                        onClick={() => router.push('/')}
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 min-w-[200px] cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            <FaHome size={20} />
                            Back to Home
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
        </div>
    );
}