"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();
const navItems = config.navigation;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                : 'text-white drop-shadow-lg'
            }`}>
              {config.personal.brand}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative group",
                  activeSection === item.href.substring(1)
                    ? isScrolled 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-white drop-shadow-lg"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-white/90 hover:text-white drop-shadow-sm"
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'bg-white shadow-lg'
                  }`}></div>
                )}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button - Hidden since we have bottom nav */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
