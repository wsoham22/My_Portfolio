import React from 'react';

const projects = [
  {
    title: "Clothing Canvas",
    duration: "01 Jul, 2024 - 11 Aug, 2024",
    skills: ["Next.js", "Tailwind CSS", "React.js", "Node.js", "Strapi", "Cloudinary"],
    link: "https://github.com/wsoham22/clothing-store-live.git",
    description: `Developed an e-commerce platform for Clothing Canvas, a brand specializing in handcrafted materials. Built with Next.js, Tailwind CSS, and React.js, this project integrates Strapi for content management and Cloudinary for media handling. The website features interactive product displays, enhanced user experience, and utilizes React hooks like useDispatch for managing cart totals. The next steps include integrating Stripe for payment processing and adding logistics details before final deploying to the domain clothingcanvas.in.`,
  },
  {
    title: "Streaming Platform Frontend",
    duration: "17 Apr, 2024 - 27 Jul, 2024",
    teamSize: "1",
    skills: ["React.js", "Node.js", "Express.js", "Firebase"],
    link: "https://github.com/wsoham22/Netflix-Clone",
    description: `Developed a dynamic React.js frontend mimicking Netflix's UI, integrating APIs for real-time movie and TV show data. Utilized Firebase Auth for user authentication, enabling secure login and personalized user experiences. Implemented seamless streaming, responsive design for enhanced user engagement, and efficient state management to handle real-time updates and interactions.`,
  },
  {
    title: "E-Learning Platform",
    duration: "01 Apr, 2024 - 10 Apr, 2024",
    teamSize: "1",
    skills: ["Node.js", "Express.js", "Cloudinary", "Postman"],
    link: "https://github.com/wsoham22/Neoxy_Backendtask01/tree/master",
    description: `Developed a robust backend for an e-learning platform using Node.js and Express.js, integrating MongoDB for efficient data management. Implemented API testing with Postman, managed media assets with Cloudinary, and utilized the Resend service for automated email communications, including welcome emails and password resets. Designed and embedded course documentation in JSON for personalized user experiences, ensuring a scalable and maintainable architecture through comprehensive service integration and documentation.`,
  },
  {
    title: "Task Manager App",
    duration: "15 Mar, 2024 - 04 Apr, 2024",
    teamSize: "1",
    skills: ["React.js", "Node.js", "Express.js", "Machine Learning", "MongoDB", "Flask", "Data Cleaning"],
    link: "https://github.com/wsoham22/ai-task.git",
    description: `Developed a task management web application using the MERN stack with JWT authentication for user security. Implemented task categorization using multiple machine learning models, including Multinomial Naive Bayes, Support Vector Machines (SVM), Decision Tree, Random Forest, and Logistic Regression. Utilized Flask with Python to create ML route for serving these models, allowing for efficient organization and retrieval of tasks. The system dynamically selected the best-performing model based on accuracy metrics to ensure optimal task categorization.`,
  }
];

const Projects = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8 border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          {project.role && (
            <p className="text-lg font-medium mb-2">Role: {project.role}</p>
          )}
          {project.duration && (
            <p className="text-sm text-gray-600 mb-2">Duration: {project.duration}</p>
          )}
          {project.teamSize && (
            <p className="text-sm text-gray-600 mb-2">Team Size: {project.teamSize}</p>
          )}
          <div className="mb-4">
            <p className="text-gray-700">{project.description}</p>
          </div>
          {project.link && (
            <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Project Link
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
export default Projects;
