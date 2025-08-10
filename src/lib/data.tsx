import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/skillotav.png',
    title: 'Skilotav - Web3 Job Platform',
    description:
      'Blockchain-based job application platform with credential wallet system for secure, decentralized professional profile management.',
    technologies: ['React', 'Web3.js', 'AI integration', 'Firebase'],
    links: {
      live: '', // no live link mentioned in CV
      preview: 'https://portfolio-generator.vercel.app',
      github: 'https://github.com/senapati484/skillotav',
      githubApi:
        'https://api.github.com/repos/yourusername/portfolio-generator',
    },
  },
  {
    image: '/images/disaster-manager.png',
    title: 'Disaster Manager',
    description:
      'A comprehensive disaster management application featuring interactive mapping, real-time alerts, AI chatbot integration, and email notifications for emergency response coordination.',
    technologies: ['React', 'Firebase', 'AI APIs', 'Google Maps API'],
    links: {
      live: 'https://disaster-manager.vercel.app',
      github: 'https://github.com/senapati484/disaster-manager',
      preview: 'https://disaster-manager.vercel.app',
      githubApi:
        'https://api.github.com/repos/yourusername/portfolio-generator',
    },
  },
  {
    image: '/images/thirtysixstudio.png',
    title: 'AI-Powered Portfolio Generator',
    description:
      'An intelligent portfolio generator that creates personalized professional portfolios using AI. Features include real-time preview, custom themes, and SEO optimization.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://thirtysixstudio.vercel.app',
      github: 'https://github.com/yourusername/portfolio-generator',
      // githubApi:
      //   'https://api.github.com/repos/yourusername/portfolio-generator',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Freelance Full-Stack Developer',
    link: `https://mixnvo.com`,
    company: 'Studio Rec 60 Sec Private Limited, Remote',
    description:
      'Architected and developed a comprehensive Meteor.js-based web application with React and Tailwind CSS for audio content creation. Implemented features like earnings calculation, project management, and success story showcases. Built a Next.js frontend with advanced GSAP animations, and developed a complete audition management system with real-time notifications and intuitive dashboards.',
    period: 'Dec 2024 – Jun 2025',
    technologies: [
      'Meteor.js',
      'React',
      'Tailwind CSS',
      'Next.js',
      'GSAP',
      'Firebase',
    ],
  },
  {
    title: 'Frelance web Developer',
    company: `Punamiya Jewellers, Remote`,
    link: `https://punamiya.vercel.app`,
    description:
      'Developed a dynamic jewelry e-commerce website using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Integrated GSAP and Framer Motion animations, optimized performance across devices, configured DNS and hosting on BigRock, and implemented SEO best practices for improved visibility.',
    period: 'Jun 2025 – Jul 2025',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'GSAP',
      'Framer Motion',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" />, label: 'HTML5', level: 'Expert' },
  { icon: <Icons.css className="size-12" />, label: 'CSS3', level: 'Expert' },
  {
    icon: <Icons.javascript className="size-12" />,
    label: 'JavaScript',
    level: 'Expert',
  },
  {
    icon: <Icons.typescript className="size-12" />,
    label: 'TypeScript',
    level: 'Expert',
  },
  {
    icon: <Icons.react className="size-12" />,
    label: 'React',
    level: 'Expert',
  },
  {
    icon: <Icons.nextjs className="size-12" />,
    label: 'Next.js',
    level: 'Expert',
  },
  {
    icon: <Icons.tailwind className="size-12" />,
    label: 'Tailwind',
    level: 'Expert',
  },
  {
    icon: <Icons.redux className="size-12" />,
    label: 'Redux',
    level: 'Advanced',
  },
  {
    icon: <Icons.nestjs className="size-12" />,
    label: 'NestJS',
    level: 'Advanced',
  },
  {
    icon: <Icons.prisma className="size-12" />,
    label: 'Prisma',
    level: 'Advanced',
  },
  {
    icon: <Icons.docker className="size-12" />,
    label: 'Docker',
    level: 'Advanced',
  },
  {
    icon: <Icons.github className="size-12" />,
    label: 'Git/GitHub',
    level: 'Expert',
  },
] as const;
