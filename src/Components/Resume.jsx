import React, { useEffect } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import ScrollReveal from "scrollreveal";

const Resume = () => {

  useEffect(() => {

    const sr = ScrollReveal({
      origin: "bottom",
      distance: "150px",
      duration: 1500,
      easing: "ease-in-out",
      reset: true,
    });

    sr.reveal(".resume");
    sr.reveal(".info");
    sr.reveal(".education");
    sr.reveal(".download-btn");

    return () => sr.destroy();
  }, []);


  return (
    <div id="resume" className="pb-7">

      <h1 className="resume text-4xl font-bold text-center pt-14 mb-6">
        Resume
      </h1>


      <div className="info bg-white shadow-lg rounded-lg p-6 md:p-10 lg:max-w-3xl  mx-auto mb-10 animate-slide-up">
        <h2 className="text-3xl font-semibold  pb-2 mb-6">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 " />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Name:</strong> Karuppanan K
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 " />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Age:</strong> 22
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 " />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Email:</strong> karuppusurya007@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <TbArrowBadgeRightFilled size={24} className="text-orange-500 " />
            <span className="text-gray-700 text-lg font-medium">
              <strong>Phone:</strong> +91 7339137389
            </span>
          </div>
        </div>
      </div>


      <div className="education bg-white shadow-lg rounded-lg p-1 md:p-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <MdSchool size={35} className="text-orange-400" />
          <h2 className="text-3xl font-semibold  pb-2">
            Education
          </h2>
        </div>
        <div className="space-y-3">

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
            <p className="text-black">Sree Veerappa Vidhyala Higher Secondary School, 2018 - 2020</p>
            <p className="text-black">Virudhunagar, Kullursandhai - 626004</p>
            <p className="text-black font-medium">Percentage: 56%</p>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              High School (10th Grade)
            </h3>
            <p className="text-black">Sree Veerappa Vidhyala Higher Secondary School, 2016 - 2018</p>
            <p className="text-black">Virudhunagar, Kullursandhai - 626004</p>
            <p className="text-black font-medium">Percentage: 76%</p>
          </div>
        </div>


        <div className="mt-8 text-center download-btn">
          <a
            href="/Resume/KaruppananResume.pdf"
            download="KaruppananResume.pdf" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
         >Download Resume</a>
        </div>

      </div>
    </div>
  );
};

export default Resume;
