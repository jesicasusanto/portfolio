import React from "react";
import Wrapper from "./Wrapper";

const projects = [
  {
    title: "Amaze",
    description: "An interactive maze visualizer built with pathfinding algorithms.",
    github: "https://github.com/jesicasusanto/AMaze",
    demo: "https://github.com/jesicasusanto/AMaze?tab=readme-ov-file#contributing:~:text=AMaze.Visualization.MOV",
    tools: ["Python", "Data Structure", "OOP"],
  },
  {
    title: "GhibliDex",
    description: "A Studio Ghibli-themed Pokédex using the Ghibli API.",
    github: "https://github.com/jesicasusanto/ghiblidex",
    demo: "https://jesicasusanto.github.io/ghiblidex/",
    tools: ["React", "JavaScript", "CSS", "Supabase"],
  },
  {
    title: "Groovegenie",
    description: "A music generation tool using machine learning.",
    github: "https://github.com/SanyaA1222/groovegenie",
    demo: "",
    tools: ["Python", "OpenCV", "Tkinter"],
  },
];

function Projects() {
  return (
    <Wrapper>
      <h1 className="font-chakra text-soft sm:text-4xl text-2xl my-5">
        &lt;Projects&gt;
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full rounded-2xl p-5 shadow-soft flex flex-col justify-between h-full hoverBox"
          >
            <div>
              <p className="font-chakra text-soft font-semibold text-sm sm:text-lg mb-2">{project.title}</p>
              <p className="text-eggplant text-xs sm:text-sm mb-2">{project.description}</p>

              {/* Tools section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-soft text-eggplant text-[10px] sm:text-xs px-2 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src="/portfolio/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <img src="/portfolio/demo.svg" alt="Demo" className="w-6 h-6 hover:opacity-80" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Projects;
