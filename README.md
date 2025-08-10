<div align="center">
  <img src="public/images/profile/profile.jpg" alt="Sayan Senapati" width="200" style="border-radius: 50%;" />

# Modern Portfolio Website

  A modern, responsive portfolio website built with Next.js 14, featuring server actions, email integration, and smooth animations.

  [Live Demo](https://sayan1.vercel.app) | [Documentation](#documentation) | [Setup Guide](#setup-guide)

  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
</div>

## ✨ Features

- 🚀 Built with Next.js 14 and TypeScript
- � Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- ✉️ Email Contact Form Integration
- 🌙 Dark/Light Mode
- ⚡ Fast Performance
- 🔍 SEO Optimized
- 🎭 Smooth Animations with Framer Motion

## 📚 Documentation

### Project Structure

```bash
├── src/
│   ├── actions/        # Server actions (email functionality)
│   ├── app/           # Next.js app router files
│   ├── components/    # React components
│   │   ├── ui/       # Reusable UI components
│   │   └── ...       # Feature components
│   └── lib/          # Configuration and utilities
│       ├── site-config.ts   # Site-wide configuration
│       └── data.tsx         # Content data
```

### Configuration Files

#### 1. site-config.ts

Contains website-wide configuration including:

- Personal information
- SEO metadata
- Social media links
- Contact information

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: '...',
  email: 'your@email.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: '...',
    // ... other social links
  }
}
```

#### 2. data.tsx

Manages content data for:

- Navigation links
- Projects showcase
- Work experience
- Skills and technologies

```typescript
export const projectsData = [
  {
    title: 'Project Name',
    description: '...',
    technologies: ['Tech1', 'Tech2'],
    links: {
      live: 'https://...',
      github: 'https://...'
    }
  }
  // ... more projects
]
```

## 🚀 Setup Guide

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
SITE_URL='https://your-domain.com'  # Required for sitemap
NEXT_PUBLIC_SMTP_HOST='smtp.gmail.com'
NEXT_PUBLIC_SMTP_PORT='587'
NEXT_PUBLIC_SMTP_SECURE='false'
NEXT_PUBLIC_SMTP_EMAIL='your_email@gmail.com'
NEXT_PUBLIC_SMTP_PASS='your_app_specific_password'
```

### 3. Gmail App Password Setup

To get your Gmail app-specific password:

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Navigate to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select 'Mail' and your device
5. Copy the generated password and use it as `NEXT_PUBLIC_SMTP_PASS`

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 🔧 Built With

- [Next.js 14](https://nextjs.org/) - The React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [React Hook Form](https://react-hook-form.com/) - Form Handling
- [Nodemailer](https://nodemailer.com/) - Email Integration

## 📞 Support

If you have any questions or run into issues, please open an issue in the repository or contact me:

- Email: [sayansenapati2544@gmail.com](mailto:sayansenapati2544@gmail.com)
- Twitter: [@SayanSenapati11](https://twitter.com/SayanSenapati11)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Created by [Sayan Senapati](https://sayan4.vercel.app)
