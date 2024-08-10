import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Developer Intern",
      company: "The Green Bowl | Hotels / Restaurant",
      duration: "10 Apr, 2024 - 10 Jun, 2024",
      skills: "Front-End Web Development, MongoDB, React.js, Git",
      description: "During my internship at GreenBowl, a cloud-based kitchen service, I was responsible for a variety of development tasks, spanning both front-end and back-end responsibilities. Collaborating closely with my team, I played a crucial role in creating the UI for the admin panel. This panel allowed for efficient management of menu items and detailed information for each menu item, streamlining the administrative processes and improving the overall functionality of the service."
    }
  ];
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{experience.title}</h2>
            <p className="text-lg text-gray-600">{experience.company}</p>
            <p className="text-gray-500">{experience.duration}</p>
            <p className="text-gray-500">Key Skills: {experience.skills}</p>
            <p className="text-gray-600 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
