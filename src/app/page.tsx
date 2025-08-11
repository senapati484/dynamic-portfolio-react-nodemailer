import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background/90 backdrop-blur-sm fixed bottom-5 right-5 flex rounded-full border shadow-lg p-1.5 z-50 sm:bottom-8 sm:right-8" />
    </>
  );
};

export default HomePage;
