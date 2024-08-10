"use client";
import { useState } from 'react';
import Link from 'next/link';
import ContactPage from './contact/page';
import Skills from './skills/page';
import Education from './education/page';
import Projects from './projects/page';
import Experience from './experience/page';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white py-4 px-8 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold mb-2 lg:mb-0">
            My Portfolio
          </Link>
          <button
            className="lg:hidden px-3 py-2 border rounded text-white border-white flex items-center justify-center"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 lg:space-x-6">
              <Link href="#about-me" className="relative block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>
                About Me
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link href="#skills" className="relative block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>
                Skills
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link href="#education" className="relative block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>
                Education
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link href="#experience" className="relative block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>
                Experience
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link href="#projects" className="relative block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>
                Projects
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleMenuToggle}></div>
          <div className="lg:hidden fixed top-0 left-0 w-full bg-blue-800 text-white transition-transform transform translate-y-0 z-50">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <Link href="#about-me" className="block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>About Me</Link>
              <Link href="#skills" className="block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>Skills</Link>
              <Link href="#education" className="block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>Education</Link>
              <Link href="#experience" className="block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>Experience</Link>
              <Link href="#projects" className="block py-2 px-4 hover:bg-blue-700 rounded transition duration-300" onClick={handleLinkClick}>Projects</Link>
            </div>
          </div>
        </>
      )}

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
