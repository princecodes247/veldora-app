import ProjectCard from "./ProjectCard";
import { useSearchControls } from "../context/SearchContext";
import { useEffect, useState } from "react";

function ProjectGrid({ isLoading, status, projects, error }) {
  const { search, filterItems } = useSearchControls();
  const [shownProjects, setShownProjects] = useState(projects);
  useEffect(() => {
    if (!search.length > 0) return;
    setShownProjects(filterItems(projects));
  }, [search]);

  return (
    <>
      {projects?.length === 0 && <p>No projects found...</p>}
      {projects?.length === 0 && (
        <div className="my-4 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-6">
          {isLoading && <p>Loading projects...</p>}

          {!isLoading &&
            projects?.map((item) => <ProjectCard key={item._id} {...item} />)}
          {status === "error" && <p>{error}</p>}
        </div>
      )}
    </>
  );
}

export default ProjectGrid;
