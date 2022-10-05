import { useState } from "react";

function ProjectCard() {
  return (
    <div className="p-4 rounded-lg overflow-hidden border border-gray-300 relative">
      <div className="">
        <div className="flex gap-4">
          <div className="">
            <h3>Most active projects.</h3>
            <p>Devfest registration form.</p>
          </div>
        </div>
        <p>Type: Registration form</p>
      </div>
      <div className="">
        <div className="">Active</div>
      </div>
      <div className="absolute -bottom-1 left-0 w-full p-1 bg-black"></div>
    </div>
  );
}

export default ProjectCard;
