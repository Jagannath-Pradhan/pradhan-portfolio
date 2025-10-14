'use client'
import { FaRegHeart } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Experience', 'Projects'],
    'Services': ['Web Development', 'UI/UX Design', 'Consulting', 'Code Review'],
    'Connect': ['GitHub', 'LinkedIn', 'Twitter', 'Email']
  };

  const socialIcons = [
    { icon: FiGithub, link: 'https://github.com/jagannath-pradhan', color: 'hover:text-cyan-400' },
    { icon: FiLinkedin, link: 'https://www.linkedin.com/in/jagannath-pradhan', color: 'hover:text-blue-500' },
    { icon: FaXTwitter, link: 'https://x.com/MrPradhan_8', color: 'hover:text-sky-400' },
    { icon: FaInstagram, link: 'https://www.instagram.com/noob__2__pro/', color: 'hover:text-pink-500' },
    { icon: FiFacebook, link: 'https://www.facebook.com/jagannath.pradhan.31', color: 'hover:text-pink-500' }
  ];

  const connectLinks = {
    GitHub: 'https://github.com/jagannath-pradhan',
    LinkedIn: 'https://www.linkedin.com/in/jagannath-pradhan',
    Twitter: 'https://x.com/MrPradhan_8',
    Email: 'mailto:jagannathpradhan884@gmail.com'
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className={`p-2 bg-slate-800 rounded-lg text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white font-semibold text-lg">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    {title === 'Connect' ? (
                      // Connect Links (Actual URLs)
                      <a
                        href={connectLinks[link]}
                        target="_blank"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    ) : (
                      // Quick Links & Services (Scroll Only)
                      <button
                        onClick={() => scrollToSection(link)}
                        className={`text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block ${title === 'Services' ? '' : 'cursor-pointer'
                          }`}
                      >
                        {link}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} <span className="text-cyan-400 font-semibold">J. Pradhan</span>. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaRegHeart size={16} className="text-pink-500 animate-pulse" /> and lots of creative energy.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>
    </footer>
  );
}