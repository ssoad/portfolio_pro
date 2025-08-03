"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Calendar } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Get section content from navigation
const sectionContent = config.navigation.sections.find(section => section.id === 'awards')?.content || {
  title: "Awards & Recognition",
  subtitle: "Achievements and honors",
  description: "Recognition for excellence and contributions in technology and leadership"
};

export function Awards() {
  const awards = config.awards;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'achievement':
        return Trophy;
      case 'recognition':
        return Award;
      case 'competition':
        return Star;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'achievement':
        return 'from-yellow-500 to-orange-500';
      case 'recognition':
        return 'from-purple-500 to-pink-500';
      case 'competition':
        return 'from-blue-500 to-indigo-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <section id="awards" className="py-12 md:py-20 bg-slate-50 dark:bg-gray-900 transition-all duration-500">
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
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {sectionContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = getCategoryIcon(award.category);
            const colorClass = getCategoryColor(award.category);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`bg-gradient-to-r ${colorClass} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                          {award.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {award.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {award.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>{formatDate(award.date)}</span>
                    </div>
                  </div>

                  {award.achievement && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Achievement
                      </h4>
                      <div className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{award.achievement}</span>
                      </div>
                    </div>
                  )}

                  {award.details && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Details
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {award.details}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
