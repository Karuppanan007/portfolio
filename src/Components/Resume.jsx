import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { MdSchool } from "react-icons/md";

const Resume = () => {
  return (
    <div id="resume" className="pt-10">
     
      <h1 className="text-4xl font-bold text-center pt-10 mb-6 animate-fade-in">
        Resume
      </h1>

    
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl mx-auto mb-10 animate-slide-up">
        <h2 className="text-3xl font-semibold  pb-2 mb-6">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 mr-2" />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Name:</strong> Karuppanan K
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 mr-2" />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Age:</strong> 22
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 mr-2" />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Email:</strong> karuppusurya007@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 mr-2" />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Phone:</strong> +91 7339137389
            </span>
          </div>
        </div>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-2 md:p-10 max-w-4xl mx-auto animate-slide-up">
        <div className="flex items-center gap-2 mb-3">
          <MdSchool size={35} className="text-orange-400" />
          <h2 className="text-3xl font-semibold  pb-2">
            Education
          </h2>
        </div>
        <div className="space-y-6">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Bachelor of Engineering
            </h3>
            <p className="text-gray-600">Sree Sowdambika College of Engineering, 2020 - 2024</p>
            <p className="text-gray-600">Aruppukottai, Chettikurichi</p>
            <p className="text-gray-700 font-medium">CGPA: 7.23</p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              High School (12th Grade)
            </h3>
            <p className="text-gray-600">Sree Veerappa Vidhyala Higher Secondary School, 2018 - 2020</p>
            <p className="text-gray-600">Virudhunagar, Kullursandhai - 626004</p>
            <p className="text-gray-700 font-medium">Percentage: 56%</p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              High School (10th Grade)
            </h3>
            <p className="text-gray-600">Sree Veerappa Vidhyala Higher Secondary School, 2016 - 2018</p>
            <p className="text-gray-600">Virudhunagar, Kullursandhai - 626004</p>
            <p className="text-gray-700 font-medium">Percentage: 76%</p>
          </div>
        </div>

       
        <div className="mt-8 text-center">
          <a
            href="/src/assets/Resume.pdf"
            download="My_Resume.pdf"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
