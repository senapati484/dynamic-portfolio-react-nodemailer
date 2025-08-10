'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FlipWords } from './ui/flip-words';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { siteConfig } from '@/lib/site-config';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const words = ['Frontend', 'Backend', 'Full-Stack', 'Software'];

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <div className="relative">
            <Image
              src="/images/profile/profile.jpg"
              alt="Developer portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Link
            href="#contact"
            className="flex items-center gap-3 rounded border px-3 py-1"
          >
            <span className="relative flex size-2">
              <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative flex size-2 rounded-full bg-green-400"></span>
            </span>
            <span className="font-mono text-sm">Available for work!</span>
          </Link>
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi 👋 I&#39;m a{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          <FlipWords words={words} />
        </span>
        developer creating modern web apps.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        A FullStack developer based in the India. I&#39;m passionate about
        building modern web applications using Next.js, React, Tailwind CSS and
        MongoDB.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/sayansenapati.pdf" target="_blank" rel="noreferrer">
            View CV <Icons.view className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.github}
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
