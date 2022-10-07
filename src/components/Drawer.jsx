import { Link, useLocation } from "react-router-dom";
import useCurrentPage from "../hooks/useCurrentPage";

function Drawer({ currentWorkspace }) {
  // Check the current url from react-router-dom useLocation hook
  const currPage = useCurrentPage(1);
  currentWorkspace = currentWorkspace || "";
  const links = [
    {
      name: "Dashboard",
      path: "",
    },
    {
      name: "Projects",
      path: "projects",
    },
    {
      name: "Settings",
      path: `settings`,
    },
    {
      name: "Help",
      path: "help",
    },
  ];
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay">
        {currentWorkspace}
      </label>
      {/* <div className="bg-base-100 text-base-content inline md:flex flex-col gap-4"> */}
      <ul className="menu bg-base-200  p-4 pr-0 overflow-y-auto gap-1 w-80 ">
        <button className="btn btn-primary mr-4 my-12">Create Project</button>
        {/* <!-- Sidebar content here --> */}
        {links.map((link) => (
          <li
            key={link.name}
            className={`rounded rounded-r-none hover:rounded-r-none ${
              currPage === link?.path
                ? "bg-base-100 hover:bg-base-100 bordered group"
                : "bg-transparent"
            }`}
          >
            <Link
              className="group-hover:bg-base-100 hover:bg-base-50 "
              to={`/${link?.path}`}
            >
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
}

export default Drawer;
