import { ProjectGrid } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { getUserProjects } from "../operations";

function Dashboard() {
  const { isLoading, projects, controls, error } = getUserProjects("", 1, 3);

  return (
    <DashboardLayout>
      <section>
        <div className="flex flex-col justify-between gap-4 pt-6">
          <div className="">
            <div className="stats w-full shadow">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Submissions left:</div>
                <div className="stat-value">26</div>
                <div className="stat-desc">Free Plan (50 per month)</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">New Submissions today</div>
                <div className="stat-value">2</div>
                <div className="stat-desc">↗︎ 22%</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Total Submissions</div>
                <div className="stat-value">1,200</div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold mt-9">Latest Projects</h2>
            <ProjectGrid
              isLoading={isLoading}
              projects={projects}
              controls={controls}
              error={error}
            />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
