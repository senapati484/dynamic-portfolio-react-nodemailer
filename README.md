<div align="center">
  
# Modern Portfolio Website
  A modern, responsive portfolio website built with Next.js 14, featuring server actions, email integration, and smooth animations.

[Live Demo](https://sayan1.vercel.app) | [Documentation](#documentation) | [Setup Guide](#setup-guide)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

## 📹 Demo

https://github.com/user-attachments/assets/1e385ec8-ae6c-41af-b6db-8d97f9d0d5f6

## ✨ Features

- 🚀 Built with Next.js 14 and TypeScript
- 📱 Fully Responsive Design
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
  },
};
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
      github: 'https://...',
    },
  },
  // ... more projects
];
```

## 🚀 Setup Guide

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/senapati484/dynamic-portfolio-react-nodemailer.git

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

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request to the `main` branch

For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

### Development Workflow

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

All changes should be submitted through the `/username/changes` route, where they will be reviewed before being merged into the main branch.

## 🙏 Acknowledgments

<div align="center">
<img src="public/images/profile/profile.jpg" alt="Sayan Senapati" width="200" style="border-radius: 50%;" />
</div>

Created by [Sayan Senapati](https://sayan4.vercel.app)

## 🔰 Good First Issues

Looking to contribute but not sure where to start? Here are some beginner-friendly issues to help you get started:

1. **Improve Accessibility**: Add ARIA labels and improve keyboard navigation throughout the site.
2. **Add Animation Variants**: Create additional animation options for section transitions.
3. **Enhance Dark Mode**: Refine the dark mode color palette for better contrast and readability.
4. **Optimize Images**: Implement next/image for all images and add proper sizing and optimization.
5. **Add Unit Tests**: Create basic unit tests for components using Jest and React Testing Library.
6. **Implement i18n Support**: Add internationalization support for multiple languages.
7. **Create Additional Themes**: Develop alternative color themes beyond just light/dark mode.
8. **Improve Mobile Navigation**: Enhance the mobile navigation experience with better transitions.

To work on any of these issues, please follow the [contribution guidelines](#-contributing) above.
