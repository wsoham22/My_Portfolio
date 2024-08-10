import React from 'react';

const Education = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <div className="space-y-6">
        
        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Bachelor of Information Technology</h2>
          <p className="text-lg text-gray-600">SIES Graduate School of Technology</p>
          <p className="text-gray-500">2021 - 2025</p>
          <p className="text-gray-500">B.E. - Information Technology | CGPA: 7.99 / 10</p>
        </div>

        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">12th Grade</h2>
          <p className="text-lg text-gray-600">GEI&apos;s S. V. Joshi High School & Junior College, Dombivli (E)</p>
          <p className="text-gray-500">2021</p>
          <p className="text-gray-500">MSBSHSE | Percentage: 86.83 / 100</p>
        </div>
        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">10th Grade</h2>
          <p className="text-lg text-gray-600">Don Bosco High School, Dombivli (W)</p>
          <p className="text-gray-500">2019</p>
          <p className="text-gray-500">MSBSHSE | Percentage: 92 / 100</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
