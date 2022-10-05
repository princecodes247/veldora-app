import DashboardLayout from "../../components/layouts/DashboardLayout";
import { ProjectGrid } from "../../components";
import { getUserProjects } from "../../operations";
function Projects() {
  const userProjects = getUserProjects();

  return (
    <DashboardLayout>
      <section>
        <ProjectGrid {...userProjects} />
      </section>
    </DashboardLayout>
  );
}

export default Projects;
