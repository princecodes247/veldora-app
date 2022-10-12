import { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PaginationBar, ProjectGrid } from "../../components";
import { getUserProjects } from "../../operations";

function Projects() {
  const [page, setPage] = useState(1);
  const { isLoading, projects, controls, error } = getUserProjects("", page);
  const { currentPage, pageSize, totalCount } = controls;

  return (
    <DashboardLayout>
      <section>
        <div className="flex text-xl gap-4">
          <h1>Projects</h1>
          <h1>{controls?.totalCount || 0}</h1>
        </div>
        <ProjectGrid
          isLoading={isLoading}
          projects={projects}
          controls={controls}
          error={error}
        />
        <PaginationBar
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={totalCount}
          onPageChange={setPage}
        />
      </section>
    </DashboardLayout>
  );
}

export default Projects;
