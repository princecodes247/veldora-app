import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { createProject } from "../../api/projects";

export default function CreateProjectModal() {
  const [nextPage, setNextPage] = useState(false);
  const [usernameOpen, setusernameOpen] = useState(false);

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal">
        <label className="modal-box bg-base-100 rounded-md lg:w-lg lg:py-16 lg:px-20 max-w-5xl max-h-4/5 overflow-y-auto overflow-x-hidden w-11/12">
          <input type="checkbox" className="hidden" name="" id="" />
          <div className="p-6 bg-base-200" /> <br /> <br />
          {/** First Section Of Modal */}
          <div className={`w-full ${!nextPage ? "" : "hidden"}`}>
            <h1 className="font-poppins text-2xl">Create a new Project</h1>{" "}
            <br /> <hr /> <br />
            {/** Project Name Section */}
            <div className="flex bg-transparent w-full items-end flex-wrap">
              <div className="block font-poppins lg:m-0 mr-5 mt-4">
                <p className="font-bold text-sm mb-3 ml-1">Creators Handle</p>
                <div className="py-2 bg-base-200 px-5">slick-codes</div>
              </div>
              <p className="font-bold mx-7 text-lg lg:block hidden">/</p>
              <div className="block font-poppins lg:w-fit w-full mt-4">
                <p className="font-bold text-sm mx-3 mb-3">Project Name</p>
                <input
                  type="text"
                  className="input bg-base-200 focus:outline-none text-sm text-gray-800 rounded-sm h-10 m-0 lg:w-96 w-full"
                  placeholder="Project Name"
                />
              </div>
            </div>{" "}
            <br />
            <br />
            {/** Description Section */}
            <div className="font-poppins lg:ml-5">
              <h3 className="font-bold text-lg">
                Description{" "}
                <span className="font-normal text-sm text-gray-800">
                  (optional)
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Add a clear description of the project to help you remember.
              </p>
            </div>
            <input
              type="text"
              className="input w-full lg:w-textbox font-poppins bg-base-200 text-gray-800 text-sm focus:outline-none mt-4 rounded-sm"
              placeholder="Project Description"
            />{" "}
            <br />
            <br />
            {/** Tag Section */}
            <div className="font-poppins lg:ml-5">
              <h3 className="font-bold text-lg">
                Tag{" "}
                <span className="font-normal text-sm text-gray-800">
                  (optional)
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Add a tag to the project to help you remember.
              </p>
            </div>
            <input
              type="text"
              className="input w-full lg:w-textbox font-poppins bg-base-200 text-gray-800 text-sm focus:outline-none mt-4 rounded-sm"
              placeholder="Project Tag"
            />{" "}
            <br />
            <br />
            {/** Project Type Section */}
            <div className="font-poppins lg:ml-5">
              <h3 className="font-bold text-lg">
                Project Type{" "}
                <span className="font-normal text-sm text-gray-800">
                  (optional)
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Describe the type of project to help you remember.
              </p>
            </div>
            <select className="input w-full lg:w-textbox font-poppins bg-base-200 text-base-content text-sm focus:outline-none border-gray-500 mt-4 rounded-sm">
              <option value="Registration Form">Registration Form</option>
            </select>{" "}
            <br />
            <br />
            <p className="lg:w-textbox text-base-content text-sm w-full">
              Registration Form: Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when{" "}
              <br />
              <br />
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          {/** First Modal Section End */}
          {/** Second Modal Section Start */}
          <div className={`w-full ${!nextPage ? "hidden" : ""} font-poppins`}>
            <h1 className="text-2xl">
              <span className="font-bold">Project</span> Schema
            </h1>{" "}
            <br /> <hr />
            <br />
            <div
              className={`border-gray-400 rounded border py-3 lg:w-3/4 w-full transition duration-500 overflow-hidden ${
                usernameOpen ? "h-fit" : "h-18"
              }`}
            >
              <div className="px-5 py-3 border-b border-gray-300 flex justify-between">
                <h2 className="font-bold text-xl">
                  UserName{" "}
                  <span className="font-normal text-sm text-gray-600">
                    required
                  </span>
                </h2>
                <div className="flex">
                  <i className="text-lg rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200">
                    <CgLoadbar />
                  </i>
                  <i
                    className={`text-xl font-bold rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200 cursor-pointer ${
                      usernameOpen ? "rotate-180" : ""
                    }`}
                    onClick={() => {
                      setusernameOpen(!usernameOpen);
                    }}
                  >
                    <IoIosArrowDown />
                  </i>
                </div>
              </div>
              <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                <div className="lg:w-sectwo lg:mb-0 mb-1">
                  <p className="text-gray-900 text-lg ml-4 mb-1">
                    Filled Name{" "}
                    <span className="text-sm text-gray-500 font-thin">
                      required
                    </span>
                  </p>
                  <input
                    type="text"
                    className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm"
                    placeholder="UserName"
                  />
                </div>
                <div className="flex w-40 bg-gray-200 p-3 rounded-sm items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded-sm no-animation mr-2"
                  />
                  <p className="text-sm">Required</p>
                </div>
              </div>{" "}
              <br />
              <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                <div className="w-sectwo lg:mb-0 mb-1">
                  <p className="text-gray-900 text-lg ml-4 mb-1">Filled Type</p>
                  <select className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm">
                    <option value="Text">Text</option>
                  </select>
                </div>
                <div className="flex w-40 bg-gray-200 p-3 rounded-sm items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded-sm no-animation mr-2"
                  />
                  <p className="text-sm">Unique</p>
                </div>
              </div>{" "}
              <br />
              <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                <div className="lg:w-sectwo lg:mb-0 mb-1">
                  <p className="text-gray-900 text-lg ml-4 mb-1">
                    Error Message{" "}
                    <span className="text-sm text-gray-500 font-thin">
                      required
                    </span>
                  </p>
                  <input
                    type="text"
                    className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm"
                    placeholder="Error Message"
                  />
                </div>
                <select className="flex w-40 bg-gray-200 p-3 focus:outline-none rounded-sm items-center">
                  <option value="Match filled">Match filled</option>
                </select>
              </div>
            </div>{" "}
            <br />
            <div className="border border-gray-400 rounded py-3 lg:w-3/4 w-full">
              <div className="px-5 flex justify-between">
                <h2 className="font-bold text-xl">
                  Password{" "}
                  <span className="font-normal text-sm text-gray-600">
                    required
                  </span>
                </h2>
                <div className="flex">
                  <i className="text-lg rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200">
                    <CgLoadbar />
                  </i>
                  <i className="text-xl font-bold rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200 hover:rotate-180 cursor-pointer">
                    <IoIosArrowDown />
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/** Second Modal Section End */}
          <br />
          <br />
          <br />
          <div className="flex">
            <button
              type="button"
              className={`btn no-animation mr-3 rounded-sm bg-gray-100 border-0 hover:bg-gray-200 text-black text-sm p-0 w-40 font-poppins ${
                nextPage ? "" : "hidden"
              }`}
              onClick={() => {
                setNextPage(!nextPage);
              }}
            >
              <i className="text-lg">
                <BsArrowLeft />
              </i>{" "}
              Back
            </button>

            <button
              type="button"
              className={`btn no-animation rounded-sm bg-gray-100 border-0 ${
                !nextPage ? "hover:bg-gray-200" : "hover:bg-gray-100"
              } text-black text-sm p-0 w-40 font-poppins ${
                !nextPage ? "" : "hidden"
              }`}
              onClick={() => {
                setNextPage(!nextPage);
              }}
            >
              Next{" "}
              <i className="text-lg">
                <BsArrowRight />
              </i>
            </button>

            <button
              type="button"
              className={`btn no-animation rounded-sm bg-gray-100 border-0 hover:bg-gray-200 text-black text-sm p-0 w-40 font-poppins ${
                nextPage ? "" : "hidden"
              }`}
              onClick={() => {
                createProject();
              }}
            >
              Publish{" "}
              <i className="text-lg">
                <BsArrowRight />
              </i>
            </button>
          </div>
        </label>
      </label>
    </>
  );
}
