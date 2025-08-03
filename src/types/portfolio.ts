export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    tagline: string;
    brand: string;
    avatar: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      website: string;
    };
  };
  about: {
    summary: string;
    description: string;
    experience_years: string;
    highlights: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  skills: {
    categories: Array<{
      name: string;
      skills: Array<{
        name: string;
        level: number;
      }>;
    }>;
  };
  experience: Array<{
    position: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    links: {
      live: string;
      github: string;
    };
    status: string;
    featured: boolean;
  }>;
  navigation: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
  settings: {
    theme: {
      default: string;
      colors: {
        primary: string;
        secondary: string;
      };
    };
    animations: {
      enabled: boolean;
      duration: number;
    };
    seo: {
      title: string;
      description: string;
      keywords: string[];
      ogImage: string;
    };
  };
}

export const getIconComponent = (iconName: string) => {
  const icons = {
    Home: 'Home',
    User: 'User', 
    Code: 'Code',
    Briefcase: 'Briefcase',
    FolderOpen: 'FolderOpen',
    Mail: 'Mail',
    Palette: 'Palette',
    Zap: 'Zap',
    Users: 'Users',
    Github: 'Github',
    Linkedin: 'Linkedin',
    Twitter: 'Twitter',
    Globe: 'Globe',
    Coffee: 'Coffee',
    Heart: 'Heart',
    Lightbulb: 'Lightbulb'
  };
  
  return icons[iconName as keyof typeof icons] || 'Code';
};
