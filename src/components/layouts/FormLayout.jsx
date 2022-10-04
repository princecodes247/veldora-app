import { useState } from "react";
import Header from "../Header";
import Drawer from "../Drawer";
import DashboardLayout from "./DashboardLayout";
import { Link } from "react-router-dom";

function Tabs(props) {
  return (
    <div className="tabs">
      <Link to={""} className="tab tab-bordered  tab-active">
        Overview
      </Link>
      <Link to={""} className="tab tab-bordered">
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
