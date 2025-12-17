 // @flow strict
import * as React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
      
      {/* Top gradient lines */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        {/* Colored circles */}
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>

        {/* Project Name */}
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Project Details */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          {/* Name */}
          <div className="ml-4 lg:ml-8 mr-2 text-white">
            name: <span className="text-amber-300">{project.name}</span>,
          </div>

          {/* Tools */}
          <div className="ml-4 lg:ml-8 mr-2">
            tools: [
            {project.tools.map((tool, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tool}</span>
                {i !== project.tools.length - 1 && <span className="text-gray-400">{`, `}</span>}
              </React.Fragment>
            ))}
            ],
          </div>

          {/* Role */}
          <div className="ml-4 lg:ml-8 mr-2 text-orange-400">
            myRole: {project.role},
          </div>

          {/* Description */}
          <div className="ml-4 lg:ml-8 mr-2 text-cyan-400">
            Description: {project.description},
          </div>

          {/* Buttons */}
          <div className="ml-4 lg:ml-8 mr-2 flex gap-2 mt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-xs bg-green-500 rounded hover:bg-green-600 transition"
              >
                <FaPlay /> Demo
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                <FaCode /> Code
              </a>
            )}
          </div>

          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
