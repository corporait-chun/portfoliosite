import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import { getProjects } from '@/lib/microcms';
import { getBlogPosts } from '@/lib/blog';

export const revalidate = 300; // 5分間隔で再検証（ISR）

export const metadata: Metadata = {
  title: 'Chun Portfolio | フルスタックエンジニア',
  description: 'フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Node.jsなどの技術スタックで、モダンなWebアプリケーションを開発しています。',
};

export default async function Home() {
  const [projects, blogData] = await Promise.all([
    getProjects(),
    getBlogPosts()
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Features />
        <Projects projects={projects} />
        <Blog blogData={blogData} />
        <Process />
      </main>
      <Footer />
    </>
  );
}
