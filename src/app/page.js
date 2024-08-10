"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ContactPage from './contact/page';
import Skills from './skills/page';
import Education from './education/page';
import Projects from './projects/page';
import Experience from './experience/page';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        if (currentScrollY > prevScrollY) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className={`bg-blue-800 text-white py-4 px-8 shadow-md fixed top-0 w-full transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'} z-50`}>
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My Portfolio
          </Link>
          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex lg:items-center lg:w-auto space-x-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="#about-me" className="hover:text-gray-300">About Me</Link>
              <Link href="#skills" className="hover:text-gray-300">Skills</Link>
              <Link href="#education" className="hover:text-gray-300">Education</Link>
              <Link href="#experience" className="hover:text-gray-300">Experience</Link>
              <Link href="#projects" className="hover:text-gray-300">Projects</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 mt-16">
        <section id="contact">
          <ContactPage />
        </section>
        <section id="about-me" className="mt-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-2xl">
            I am currently learning and growing in full-stack web development, with experience in creating projects using the MERN stack, Next.js, and Tailwind CSS. I actively engage in problem-solving on LeetCode, constantly honing my skills and staying updated with the latest technologies.
          </p>
        </section>
        <section id="skills" className="mt-12">
          <Skills />
        </section>
        <section id="education" className="mt-12">
          <Education />
        </section>
        <section id="experience" className="mt-12">
          <Experience />
        </section>
        <section id="projects" className="mt-12">
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
