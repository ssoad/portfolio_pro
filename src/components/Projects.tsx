"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with shopping cart, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      demoUrl: "https://taskapp-demo.example.com",
      githubUrl: "https://github.com/johndoe/task-manager",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data, forecasts, and interactive maps using weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
      demoUrl: "https://weather-dashboard.example.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with modern design, smooth animations, and responsive layout.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with content management, user authentication, comments system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b5a4?w=600&h=400&fit=crop&auto=format",
      technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      demoUrl: "https://blog-platform.example.com",
      githubUrl: "https://github.com/johndoe/blog-platform",
      featured: false
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization tool that transforms complex datasets into meaningful charts and insights for business analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL", "Bootstrap"],
      demoUrl: "https://dataviz-tool.example.com",
      githubUrl: "https://github.com/johndoe/data-viz",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 md:py-20 bg-white dark:bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm flex items-center gap-1"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
