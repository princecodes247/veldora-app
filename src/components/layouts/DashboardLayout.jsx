import { useEffect, useState, createContext } from "react";
import Drawer from "../Drawer";
import Header from "../Header";

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-8">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <Drawer />
      </div>
    </>
  );
}

export default DashboardLayout;
