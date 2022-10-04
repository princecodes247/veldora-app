import { Link, useLocation } from "react-router-dom";

function Drawer({ children, currentWorkspace }) {
  // Check the current url from react-router-dom useLocation hook
  const location = useLocation();
  const isActive = (path) => {
    console.log(location.pathname);
    if (path === location.pathname) return true;
    if (path !== "/" && location.pathname.includes(path)) {
      return true;
    } else {
      return false;
    }
  };
  currentWorkspace = currentWorkspace || "";
  const links = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Settings",
      path: `/settings`,
    },
    {
      name: "Help",
      path: "/help",
    },
  ];
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-8">
        {/* <!-- Page content here --> */}
        {children}
      </div>
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
              className={`rounded rounded-r-none hover:rounded-r-none ${
                isActive(link?.path) ? "bg-blue-100" : "bg-transparent"
              }`}
            >
              <Link className="hover:rounded-r-none" to={`${link?.path}`}>
                {link?.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Drawer;
