import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import DashboardLayout from "./DashboardLayout";
import useCurrentPage from "../../hooks/useCurrentPage";

function Tabs() {
  const currPage = useCurrentPage(3);
  const { projectId } = useParams();
  useEffect(() => {
    console.log(currPage);
  }, []);

  return (
    <div className="tabs tabs-boxed w-fit my-4">
      <Link
        to={`/projects/${projectId}`}
        className={`tab  ${currPage === undefined && "tab-active"}`}
      >
        Overview
      </Link>
      <Link
        to={`/projects/${projectId}/settings`}
        className={`tab ${currPage === "settings" && "tab-active"}`}
      >
        Settings
      </Link>
    </div>
  );
}

function FormLayout({ children }) {
  return (
    <DashboardLayout>
      <div className="flex gap-4 items-center mt-1">
        <Link
          to="/projects"
          className="btn btn-circle bg-base-200 hover:bg-base-300 border-none"
        >
          <BiArrowBack size={22} />
        </Link>
        <h1 className="text-xl">Project</h1>
      </div>
      <Tabs />
      {children}
    </DashboardLayout>
  );
}

export default FormLayout;
