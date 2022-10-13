import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "../Header";
import Drawer from "../Drawer";
import DashboardLayout from "./DashboardLayout";
import useCurrentPage from "../../hooks/useCurrentPage";

function Tabs(props) {
  const currPage = useCurrentPage(3);
  const { projectId } = useParams();
  useEffect(() => {
    console.log(currPage);
  }, []);

  return (
    <div className="tabs tabs-boxed my-4">
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
        <Link to="/projects" className="btn btn-circle">
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
