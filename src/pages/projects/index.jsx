import { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PaginationBar, ProjectGrid } from "../../components";
import { getUserProjects } from "../../operations";

function Projects() {
  const [page, setPage] = useState(1);
  const userProjects = getUserProjects("", page);

  return (
    <DashboardLayout>
      <section>
        <div className="flex text-xl gap-4">
          <h1>Projects</h1>
          <h1>{userProjects?.controls?.totalCount || 0}</h1>
        </div>
        <ProjectGrid {...userProjects} />
        <PaginationBar {...userProjects.controls} onPageChange={setPage} />
      </section>
    </DashboardLayout>
  );
}

export default Projects;
