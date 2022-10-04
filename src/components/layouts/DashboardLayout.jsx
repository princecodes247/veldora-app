import { useEffect, useState, createContext } from "react";
import Drawer from "../Drawer";
import Header from "../Header";
// import { getWorkspaceData, getUserWorkspaces } from "../../operations/index";

function DashboardLayout({ children }) {
  // const [workspaceData, setWorkspaceData] = useState({});

  // useEffect(() => {
  //   const data = getWorkspaceData("test");
  //   setWorkspaceData(data);
  //   return;
  // }, []);

  // const WorkspaceContext = createContext({});

  return (
    // <WorkspaceContext.Provider>
    <>
      <Header />

      <Drawer>{children}</Drawer>
    </>
    // </WorkspaceContext.Provider>
  );
}

export default DashboardLayout;
