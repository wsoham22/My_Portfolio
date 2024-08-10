import React from 'react';
import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiFlask, SiSqlite, SiCplusplus,SiExpress } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaReact className="text-6xl mb-4 mx-auto text-blue-600" />
          <h2 className="text-2xl font-semibold">React</h2>
          <p className="text-gray-600">Building interactive UIs with React.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaNode className="text-6xl mb-4 mx-auto text-green-600" />
          <h2 className="text-2xl font-semibold">Node.js</h2>
          <p className="text-gray-600">Server-side programming with Node.js.</p>
        </div>
         <div className="border p-6 rounded-lg shadow-md text-center">
        <SiExpress className="text-6xl mb-4 mx-auto text-gray-700" />
        <h2 className="text-2xl font-semibold">Express.js</h2>
        <p className="text-gray-600">Fast and minimalist web framework for Node.js.</p>
        </div>

        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaDatabase className="text-6xl mb-4 mx-auto text-yellow-600" />
          <h2 className="text-2xl font-semibold">MongoDB</h2>
          <p className="text-gray-600">NoSQL database management.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <SiSqlite className="text-6xl mb-4 mx-auto text-blue-700" />
          <h2 className="text-2xl font-semibold">SQL</h2>
          <p className="text-gray-600">Structured Query Language for database management.</p>
        </div>

        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaHtml5 className="text-6xl mb-4 mx-auto text-red-600" />
          <h2 className="text-2xl font-semibold">HTML5</h2>
          <p className="text-gray-600">Structuring content on the web.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaCss3 className="text-6xl mb-4 mx-auto text-blue-500" />
          <h2 className="text-2xl font-semibold">CSS3</h2>
          <p className="text-gray-600">Styling web pages with CSS.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <SiFlask className="text-6xl mb-4 mx-auto text-black" />
          <h2 className="text-2xl font-semibold">Flask</h2>
          <p className="text-gray-600">Python web framework for building web applications.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaGitAlt className="text-6xl mb-4 mx-auto text-orange-600" />
          <h2 className="text-2xl font-semibold">Git</h2>
          <p className="text-gray-600">Version control for tracking changes in code.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaPython className="text-6xl mb-4 mx-auto text-blue-500" />
          <h2 className="text-2xl font-semibold">Python</h2>
          <p className="text-gray-600">Versatile programming language for various applications.</p>
        </div>

        <div className="border p-6 rounded-lg shadow-md text-center">
          <SiCplusplus className="text-6xl mb-4 mx-auto text-blue-800" />
          <h2 className="text-2xl font-semibold">C++</h2>
          <p className="text-gray-600">High-performance language for system/software development.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-md text-center">
          <FaCode className="text-6xl mb-4 mx-auto text-gray-700" />
          <h2 className="text-2xl font-semibold">DSA</h2>
          <p className="text-gray-600">Data Structures and Algorithms for problem-solving.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
