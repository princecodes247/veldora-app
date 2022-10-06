import DashboardLayout from "../../components/layouts/DashboardLayout";
import { ProjectGrid } from "../../components";
import { getUserProjects } from "../../operations";
function Projects() {
  const userProjects = getUserProjects();

  return (
    <DashboardLayout>
      <section>
        <div className="flex text-xl gap-4">
          <h1>Projects</h1>
          <h1>{userProjects.projects.length}</h1>
        </div>
        <ProjectGrid {...userProjects} />
      </section>
    </DashboardLayout>
  );
}

export default Projects;
