import { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ isLoading, status, projects, error }) {
  console.log(projects);
  return (
    <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] gap-6">
      {isLoading && <p>Loading projects...</p>}
      {!isLoading && projects.map((item) => <ProjectCard key={item.id} />)}
      {status === "error" && <p>{error}</p>}
    </div>
  );
}

export default ProjectGrid;
