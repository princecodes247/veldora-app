import { useEffect, useState, createContext } from "react";
import Drawer from "../Drawer";
import Header from "../Header";
import { CreateProjectModal } from "../modals";

function DashboardLayout({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-8 pt-0">
        <Header />
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <Drawer />
      <CreateProjectModal />
    </div>
  );
}

export default DashboardLayout;
