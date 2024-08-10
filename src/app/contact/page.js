import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="py-8 px-4 max-w-3xl mx-auto">
      <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative flex-shrink-0 w-36 h-36 md:w-48 md:h-48">
            <Image
              src="/images/my_pic.jpg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Soham Sameer Wagh</h2>
            <p className="text-lg md:text-xl text-gray-700">B.E. - Information Technology</p>
            <p className="text-gray-600">Dombivli, Maharashtra, India - 421203</p>
            <p className="text-gray-600">Ph: +91-9820334522</p>
            <p className="text-gray-600">
              Email: 
              <a href="mailto:wsoham22@gmail.com" className="text-blue-600 hover:underline">
                wsoham22@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/getwithsw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://github.com/wsoham22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaGithub className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/sohamwagh34/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://leetcode.com/wsoham22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <Image
              src="/images/leetcode.svg"
              alt="LeetCode"
              width={30} 
              height={36} 
              className="w-8 h-9"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
