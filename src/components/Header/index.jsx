import { useState } from "react";

function Header() {
  return (
    <div className="navbar pl-0 py-0 px-6 flex bg-base-100">
      <div className="navbar-start  self-stretch ">
        <div className="dropdown">
          <label
            htmlFor="my-drawer-2"
            tabIndex={0}
            className="btn drawer-button lg:hidden btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <div className="searchbar border flex items-center p-1 px-2 rounded">
                <input
                  type="text"
                  className="p-4 py-3 grow bg-transparent outline-none"
                  placeholder="Search here..."
                />
                <button className="btn btn-primary rounded-lg px-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li className="mt-6">
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Docs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center ml-6 pl-6 my-3 hidden w-full lg:flex flex-1">
        <div className="searchbar border w-[38vw] flex items-center p-1 px-2 rounded">
          <input
            type="text"
            className="p-4 py-3 flex-1 bg-transparent outline-none"
            placeholder="Search here..."
          />
          <button className="btn btn-primary rounded-lg px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <ul className="flex gap-4 items-center text-sm ml-8">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>DOCS</li>
        </ul>
      </div>
      <div className="navbar-end my-3">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <a>
              O
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="-left-12 p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
