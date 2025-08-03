# Dynamic Portfolio Configuration

This portfolio is fully configurable through a JSON file. You can easily customize all content without touching the React components.

## How to Customize

### 1. Edit Configuration File
All portfolio data is stored in `/src/config/portfolio.json`. Simply edit this file to customize:

- **Personal Information**: Name, title, tagline, brand name
- **Contact Details**: Email, phone, location, social links
- **About Section**: Summary, description, experience years, highlights
- **Skills**: Categories and skill levels (0-100)
- **Experience**: Work history with achievements and technologies
- **Projects**: Portfolio projects with images, tech stacks, and links
- **Navigation**: Menu items and their corresponding icons
- **SEO Settings**: Meta tags, descriptions, and social media images

### 2. Configuration Structure

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "tagline": "Your professional tagline",
    "brand": "Your Brand Name",
    "avatar": "/path/to/avatar.jpg"
  },
  "contact": {
    "email": "your@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername", 
      "website": "https://yourwebsite.com"
    }
  }
  // ... more sections
}
```

### 3. Available Icons

For navigation and highlights, you can use these icon names:
- `Home`, `User`, `Code`, `Briefcase`, `FolderOpen`, `Mail`
- `Palette`, `Zap`, `Users`, `Coffee`, `Heart`, `Lightbulb`
- `Github`, `Linkedin`, `Twitter`, `Globe`

### 4. Skill Levels
Use numbers 0-100 to represent skill proficiency:
- 0-30: Beginner
- 31-60: Intermediate  
- 61-80: Advanced
- 81-100: Expert

### 5. Project Status
Available project statuses:
- `completed`: Finished projects
- `in-progress`: Currently working on
- `planned`: Future projects

### 6. Featured Projects
Set `"featured": true` for projects you want to highlight prominently.

## Quick Start

1. Clone the repository
2. Edit `/src/config/portfolio.json` with your information
3. Replace images in `/public/` folder
4. Run `npm run dev` to see changes
5. Deploy to Vercel, Netlify, or your preferred platform

## File Structure

```
src/
├── config/
│   └── portfolio.json          # Main configuration file
├── types/
│   └── portfolio.ts           # TypeScript interfaces
├── hooks/
│   └── usePortfolioConfig.ts  # Configuration loader
└── components/               # React components (auto-configured)
```

## Tips

- Keep image URLs accessible and optimized for web
- Use high-quality images (600x400px recommended for projects)
- Test all external links before deployment
- Keep descriptions concise but informative
- Update social links to match your actual profiles

## Deployment

The portfolio is ready to deploy to:
- **Vercel**: `npm run build` then deploy
- **Netlify**: Connect GitHub repo for automatic deployment
- **GitHub Pages**: Use GitHub Actions for deployment

Your portfolio will automatically use all the data from your JSON configuration! 🚀
