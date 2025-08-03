"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Get section content from navigation
const sectionContent = config.navigation.sections.find(section => section.id === 'certifications')?.content || {
  title: "Certifications",
  subtitle: "Professional certifications",
  description: "Industry-recognized certifications and technical qualifications"
};

export function Certifications() {
  const certifications = config.certifications;

  const isExpired = (expiry: string) => {
    return new Date(expiry) < new Date();
  };

  const isExpiringSoon = (expiry: string) => {
    const expiryDate = new Date(expiry);
    const now = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(now.getMonth() + 3);
    return expiryDate > now && expiryDate <= threeMonthsFromNow;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="certifications" className="py-12 md:py-20 bg-white dark:bg-gray-800 transition-all duration-500">
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
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {sectionContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>Earned: {formatDate(cert.date)}</span>
                  </div>
                  
                  {cert.expiry && (
                    <div className="flex items-center text-sm">
                      {isExpired(cert.expiry) ? (
                        <>
                          <AlertTriangle size={16} className="mr-2 text-red-500" />
                          <span className="text-red-600 dark:text-red-400">
                            Expired: {formatDate(cert.expiry)}
                          </span>
                        </>
                      ) : isExpiringSoon(cert.expiry) ? (
                        <>
                          <AlertTriangle size={16} className="mr-2 text-orange-500" />
                          <span className="text-orange-600 dark:text-orange-400">
                            Expires: {formatDate(cert.expiry)}
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle size={16} className="mr-2 text-green-500" />
                          <span className="text-green-600 dark:text-green-400">
                            Valid until: {formatDate(cert.expiry)}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                  
                  {cert.credentialId && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                  )}
                </div>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {cert.verificationUrl && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Verify Certification
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
