import { Link } from "react-router-dom";
import { HiMenuAlt2, HiSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <div className="navbar pl-0 py-0 px-6 flex bg-base-100">
      <div className="navbar-start  self-stretch ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn drawer-button lg:hidden btn-ghost btn-circle"
            htmlFor="my-drawer-2"
          >
            <HiMenuAlt2 />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <div className="searchbar border-gray-600 flex items-center p-1 px-2 rounded">
                <input
                  type="text"
                  className="p-4 py-3 grow bg-transparent outline-none"
                  placeholder="Search here..."
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-lg px-8"
                >
                  <HiSearch />
                </button>
              </div>
            </li>
            <li className="mt-6">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center ml-6 pl-6 my-3 hidden w-full lg:flex flex-1">
        <div className="searchbar border border-base-300 w-[38vw] flex items-center p-1 px-2 rounded">
          <input
            type="text"
            className="p-4 py-3 flex-1 bg-transparent outline-none"
            placeholder="Search here..."
          />
          <button type="button" className="btn btn-primary rounded-lg px-8">
            <HiSearch />
          </button>
        </div>

        <ul className="flex gap-4 items-center text-sm ml-8">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/docs">DOCS</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end my-3">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <a href="/">
              <div className="rounded-full w-8 h-8 bg-black" />
              <IoIosArrowDown />
            </a>
            <ul className="-left-12 p-2">
              <li>
                <a href="/">Submenu 1</a>
              </li>
              <li>
                <a href="/">Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
