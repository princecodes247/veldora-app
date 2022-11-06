import ProjectCard from "./ProjectCard";

function ProjectGrid({ isLoading, status, projects, error }) {
  return (
    <div className="my-4 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-6">
      {isLoading && <p>Loading projects...</p>}
      {!isLoading &&
        projects?.map((item) => <ProjectCard key={item._id} {...item} />)}
      {status === "error" && <p>{error}</p>}
    </div>
  );
}

export default ProjectGrid;
