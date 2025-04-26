import React, { useState } from "react";
import Wrapper from "./Wrapper";

// You can replace this with an actual pointer logo SVG or icon
const pointerLogo = "/alien.svg"; // Path to your logo (SVG or PNG)

function Experience() {
  const [selectedTab, setSelectedTab] = useState(0);

  const experiences = [
    {
      company: "Husky",
      role: "Software Developer Intern",
      duration: "May 2024 - Present",
      description: [
        "Redesigned a C# web app with MVC architecture which imporved app performance and user engagement.",
        "Optimized SQL performance by addressing bottlenecks boosting system efficiency by 80%.",
      ],
      
    },
    {
      company: "OpenAdapt.AI",
      role: "M.L. Engineer Intern",
      duration: "June 2021 - JUL 2022",
      description: [
        "Enhanced OpenAdapt.ai by integrating the SAM model with traditional GUIs, boosting system accessibility.",
        
        "Designed the landing page’s target industries section using React.js, expanding market reach and user engagement.",
      ],
      
    },
  ];

  return (
    <Wrapper>
      {/* Left Tabs (Horizontal) */}
      <div className="w-full p-5 bg-lavender rounded-xl shadow-soft mt-5">
        <h1 className="font-chakra text-soft sm:text-4xl text-2xl my-5">&lt;Experience&gt;</h1>
        <div className="flex space-x-10 relative">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex-col items-center">
              {/* Pointer Logo on Top of the Selected Company */}
              {selectedTab === index && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 ease-in-out"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={pointerLogo}
                    alt="Pointer Logo"
                    className="w-6 h-6" // Adjust the size of the pointer logo
                  />
                </div>
              )}
              <button
                className={`text-center p-2 text-lg ${selectedTab === index ? "text-purple font-semibold" : "text-soft"}`}
                onClick={() => setSelectedTab(index)}
              >
                {experience.company}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-5 rounded-xl shadow-soft mt-5 hoverBox">
        <h2 className="font-chakra text-soft sm:text-3xl text-2xl">
          {experiences[selectedTab].role} @ {experiences[selectedTab].company}
        </h2>
        <p className="font-chakra text-soft sm:text-lg text-md mb-4">{experiences[selectedTab].duration}</p>
        <ul className="list-disc pl-5 space-y-2 text-eggplant">
          {experiences[selectedTab].description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default Experience;
