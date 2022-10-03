import { Link } from "react-router-dom";

function Drawer({ children, links, currentWorkspace }) {
  currentWorkspace = currentWorkspace || "";
  links = links || [];
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
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {links.map((link) => {
            <li>
              <Link to={`/form/${link?._id}`}>{link?.name}</Link>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
