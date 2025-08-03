"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of a React-based dashboard serving 10k+ users daily",
        "Improved application performance by 40% through optimization techniques",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product team to define technical requirements"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: [
        "Built and maintained multiple client-facing web applications",
        "Implemented RESTful APIs and microservices architecture",
        "Reduced bug reports by 60% through comprehensive testing strategies",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "Python", "Django", "AWS", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Remote",
      description: [
        "Developed responsive web interfaces using modern JavaScript frameworks",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Optimized website performance and improved SEO rankings",
        "Integrated third-party APIs and payment processing systems"
      ],
      technologies: ["JavaScript", "Vue.js", "CSS3", "HTML5", "Stripe API"]
    }
  ];

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
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the impact I&apos;ve made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
