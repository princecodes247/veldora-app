import DashboardLayout from "../../components/layouts/DashboardLayout";
import ProjectGrid from "../../components/ProjectGrid";
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
