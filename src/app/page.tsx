import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import { getProjects } from '@/lib/microcms';

export const revalidate = 3600; // 1時間ごとに再検証

export const metadata: Metadata = {
  title: 'Chun Portfolio | フルスタックエンジニア',
  description: 'フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Node.jsなどの技術スタックで、モダンなWebアプリケーションを開発しています。',
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Features />
        <Projects projects={projects} />
        <Process />
      </main>
      <Footer />
    </>
  );
}
