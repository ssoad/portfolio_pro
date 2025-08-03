'use client';

import { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, FolderOpen, Mail, GraduationCap, Award, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

// Icon mapping
const iconMap = {
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  GraduationCap,
  Award,
  Trophy,
};

const bottomNavItems = config.navigation.sections
  .filter(section => section.enabled && section.showInNav)
  .sort((a, b) => a.order - b.order)
  .map(item => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap] || Code,
  }));

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = bottomNavItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
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
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50"></div>
      
      {/* Navigation items */}
      <div className="relative flex items-center py-2 px-2 safe-area-pb overflow-hidden">
        {bottomNavItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "flex flex-col items-center justify-center p-1.5 rounded-xl transition-all duration-300 min-w-0 flex-1 max-w-[80px]",
                isActive
                  ? "bg-blue-500/10 dark:bg-blue-400/10"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {/* Icon with active indicator */}
              <div className="relative">
                <IconComponent 
                  size={18} 
                  className={cn(
                    "transition-all duration-300",
                    isActive 
                      ? "text-blue-600 dark:text-blue-400 scale-110" 
                      : "text-gray-600 dark:text-gray-400"
                  )} 
                />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </div>
              
              {/* Label */}
              <span 
                className={cn(
                  "text-[10px] mt-1 font-medium transition-all duration-300 truncate leading-tight max-w-full",
                  isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-600 dark:text-gray-400"
                )}
              >
                {item.name}
              </span>
              
              {/* Active indicator line */}
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/80 dark:bg-gray-900/80"></div>
    </div>
  );
}
