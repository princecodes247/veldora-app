import { useEffect, useState } from "react";
import Header from "../Header";
import Drawer from "../Drawer";
import DashboardLayout from "./DashboardLayout";
import { Link, useParams } from "react-router-dom";
import useCurrentPage from "../../hooks/useCurrentPage";

function Tabs(props) {
  const currPage = useCurrentPage(3);
  let { projectId } = useParams();
  useEffect(() => {
    console.log(currPage);
  }, []);

  return (
    <div className="tabs mb-8">
      <Link
        to={`/projects/${projectId}`}
        className={`tab tab-bordered ${currPage === undefined && "tab-active"}`}
      >
        Overview
      </Link>
      <Link
        to={`/projects/${projectId}/settings`}
        className={`tab tab-bordered ${
          currPage === "settings" && "tab-active"
        }`}
      >
        Settings
      </Link>
    </div>
  );
}

function FormLayout({ children }) {
  return (
    <DashboardLayout>
      <Tabs />
      {children}
    </DashboardLayout>
  );
}

export default FormLayout;
