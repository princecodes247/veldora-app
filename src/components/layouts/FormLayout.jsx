import { useState } from "react";
import Header from "../Header";
import Drawer from "../Drawer";
import DashboardLayout from "./DashboardLayout";

function FormLayout({ children }) {
  return (
    <DashboardLayout>
      <div className="tabs">
        <a className="tab tab-bordered">Tab 1</a>
        <a className="tab tab-bordered tab-active">Tab 2</a>
        <a className="tab tab-bordered">Tab 3</a>
      </div>
      {children}
    </DashboardLayout>
  );
}

export default FormLayout;
