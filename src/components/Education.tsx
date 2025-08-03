"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Get section content from navigation
const sectionContent = config.navigation.sections.find(section => section.id === 'education')?.content || {
  title: "Education",
  subtitle: "My educational journey",
  description: "Academic background and qualifications that shaped my career"
};

export function Education() {
  const education = config.education;

  return (
    <section id="education" className="py-12 md:py-20 bg-slate-50 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Highlights
                        </h5>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <BookOpen size={18} className="mr-2" />
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, cIndex) => (
                            <span
                              key={cIndex}
                              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
