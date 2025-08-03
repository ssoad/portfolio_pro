"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Users, Palette, Zap, Heart } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Get section content from navigation
const sectionContent = config.navigation.sections.find(section => section.id === 'about')?.content || {
  title: "About Me",
  subtitle: "Get to know me better", 
  description: "Learn about my background, skills, and what drives me as a developer"
};

// Icon mapping
const iconMap = {
  Code,
  Coffee,
  Lightbulb,
  Users,
  Palette,
  Zap,
  Heart,
};

const highlights = config.about.highlights.map(highlight => ({
  ...highlight,
  iconComponent: iconMap[highlight.icon as keyof typeof iconMap] || Code,
}));

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-slate-50 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {sectionContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {sectionContent.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Coffee className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                      Passionate Developer
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {config.about.experience_years} Years Experience
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {config.about.summary}
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {config.about.description}
                </p>

                <div className="flex items-center gap-2 text-red-500">
                  <Heart size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Made with love and lots of coffee
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.iconComponent;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span>Let&apos;s build something amazing together</span>
            <Zap size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
