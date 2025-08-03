"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Get section content from navigation
const sectionContent = config.navigation.sections.find(section => section.id === 'experience')?.content || {
  title: "Work Experience", 
  subtitle: "My professional journey",
  description: "Career highlights and achievements in various roles and companies"
};

export function Experience() {
  const experiences = config.experience;

  return (
    <section id="experience" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {sectionContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {sectionContent.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-8 sm:ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="text-sm sm:text-base">{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center sm:ml-4">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          <span className="text-sm sm:text-base">{exp.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
