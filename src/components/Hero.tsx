"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

export function Hero() {
  const socialLinks = [
    { 
      href: config.contact.social.github, 
      icon: Github, 
      label: "GitHub" 
    },
    { 
      href: config.contact.social.linkedin, 
      icon: Linkedin, 
      label: "LinkedIn" 
    },
    { 
      href: config.contact.social.website, 
      icon: Globe, 
      label: "Website" 
    },
    { 
      href: `mailto:${config.contact.email}`, 
      icon: Mail, 
      label: "Email" 
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black relative transition-all duration-500 overflow-hidden"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight break-words">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {config.personal.name}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 font-light">
            {config.personal.title}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {config.personal.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/30 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-purple-600 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-12 sm:mb-16 px-4"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${label} profile`}
              className="text-white p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="animate-bounce"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to about section"
            className="text-white bg-white/10 hover:bg-white/20 border-none rounded-full p-4 hover:scale-110 transform transition-all duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
