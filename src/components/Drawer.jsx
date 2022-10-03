import { Link, useLocation } from "react-router-dom";

function Drawer({ children, currentWorkspace }) {
  // Check the current url from react-router-dom useLocation hook
  const location = useLocation();
  const isActive = (path) => {
    console.log(location.pathname);
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };
  currentWorkspace = currentWorkspace || "";
  const links = [
    {
      name: "Overview",
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
        momo
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay">
          {currentWorkspace}
        </label>
        {/* <div className="bg-base-100 text-base-content inline md:flex flex-col gap-4"> */}
        <ul className="menu bg-base-100  p-4 overflow-y-auto gap-1 w-80 ">
          <button className="btn btn-primary  my-12">Create Project</button>
          {/* <!-- Sidebar content here --> */}
          {links.map((link) => (
            <li
              className={`rounded ${
                isActive(link?.path) ? "bg-blue-100" : "bg-transparent"
              }`}
            >
              <Link to={`${link?.path}`}>{link?.name}</Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Drawer;
