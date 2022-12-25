import { Link } from "react-router-dom";
import { HiMenuAlt2, HiSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from "../../hooks";
import { useState } from "react";
import { useSearchControls } from "../../context/SearchContext";

function Header() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    console.log("nakkk");
    setSearchQuery(e.target.value);
  };
  console.log(user);
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
        </div>
      </div>
      <div className="navbar-center ml-6 pl-6 my-3 hidden w-full lg:flex flex-1">
        <div className="searchbar border border-base-300 w-[38vw] flex items-center pl-6 p-1 px-2 rounded">
          <HiSearch size={20} />
          <input
            type="text"
            className="p-4 py-3 flex-1 bg-transparent outline-none"
            placeholder="Search here..."
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>

        <ul className="hidden xl:flex gap-4 items-center text-sm ml-8">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end my-3">
        <div className="bg-black p-4"></div>
      </div>
    </div>
  );
}

export default Header;
