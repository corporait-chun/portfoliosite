'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Project } from '@/types/project';

interface HomeContentProps {
  projects: Project[];
}

export default function HomeContent({ projects }: HomeContentProps) {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Process />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
} 