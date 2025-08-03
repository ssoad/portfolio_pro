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
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    duration: string;
    gpa: string;
    description: string;
    highlights: string[];
    coursework: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    expiry: string;
    credentialId: string;
    verificationUrl: string;
    description: string;
    skills: string[];
    featured: boolean;
  }>;
  awards: Array<{
    title: string;
    issuer: string;
    date: string;
    category: string;
    description: string;
    details: string;
    achievement: string;
    featured: boolean;
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
  navigation: {
    sections: Array<{
      id: string;
      name: string;
      href: string;
      icon: string;
      enabled: boolean;
      showInNav: boolean;
      order: number;
      content: {
        title: string;
        subtitle: string;
        description: string;
      };
    }>;
    settings: {
      maxNavItems: number;
      showIcons: boolean;
      mobileCollapse: boolean;
      stickyNav: boolean;
    };
  };
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
    GraduationCap: 'GraduationCap',
    Award: 'Award',
    Trophy: 'Trophy',
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
    Lightbulb: 'Lightbulb',
    Calendar: 'Calendar',
    MapPin: 'MapPin',
    ExternalLink: 'ExternalLink',
    CheckCircle: 'CheckCircle'
  };
  
  return icons[iconName as keyof typeof icons] || 'Code';
};
