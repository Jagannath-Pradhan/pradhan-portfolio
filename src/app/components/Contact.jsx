'use client'
import { useState } from 'react';
import { FiPhoneCall, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuMapPin, LuSend } from 'react-icons/lu';
import { toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(`Failed: ${data.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MdOutlineMailOutline,
      title: 'Email',
      value: 'jagannathpradhan1221@gmail.com',
      link: 'mailto:jagannathpradhan1221@gmail.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: FiPhoneCall,
      title: 'Phone',
      value: '+91 8338901176',
      link: 'tel:+91 8338901176',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: LuMapPin,
      title: 'Location',
      value: 'Angul, Odisha, India',
      link: '/',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/jagannath-pradhan', color: 'hover:text-cyan-400' },
    { icon: FiLinkedin, link: 'https://www.linkedin.com/in/jagannath-pradhan', color: 'hover:text-blue-500' },
    { icon: FaXTwitter, link: 'https://x.com/MrPradhan_8', color: 'hover:text-sky-400' }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Sparkles size={18} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Let's Connect</span>
          </div> */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Let's collaborate and create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isLocation = info.title === 'Location';
                const isEmail = info.title === 'Email';
                const isPhone = info.title === 'Phone';

                // Determine href based on title
                const link =
                  isEmail
                    ? `mailto:${info.value}`
                    : isPhone
                      ? `tel:${info.value.replace(/\s+/g, '')}`
                      : info.link;

                const Wrapper = isLocation ? 'div' : 'a';
                const wrapperProps = isLocation
                  ? {}
                  : { href: link, target: isEmail || isPhone ? undefined : '_blank', rel: 'noopener noreferrer' };

                return (
                  <Wrapper
                    key={index}
                    {...wrapperProps}
                    className={`group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl transition-all duration-300 
        ${isLocation ? 'hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20' : 'hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20'}`}
                  >
                    <div
                      className={`p-3 bg-gradient-to-br ${info.color} rounded-lg ${isLocation ? '' : 'group-hover:scale-110 transition-transform duration-300'
                        }`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      <p
                        className={`text-white font-semibold ${isLocation ? '' : 'group-hover:text-cyan-400 transition-colors duration-300'
                          }`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}

            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Follow My Journey
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target='_blank'
                      className={`p-4 bg-slate-800 rounded-full border border-slate-700 text-gray-400 ${social.color} hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  placeholder="J. Pradhan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  placeholder="pradhan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full px-8 py-4 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <LuSend size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}