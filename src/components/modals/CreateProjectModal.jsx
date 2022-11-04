import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Schema from "./components/schema";

export default function CreateProjectModal() {
  const [nextPage, setNextPage] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [ProjectType, setType] = useState("Registration Form");

  //Function To Handle Input Changes
  function StoreData(inputVal, action) {
    switch (action) {
      case 'ADD_PROJECT_NAME':
        setProjectName(inputVal);
        break;
      case 'ADD_DESCRIPTION':
        setDescription(inputVal);
        break;
      case 'ADD_TAG':
        setTag(inputVal);
        break;
      case 'ADD_TYPE':
        setType(inputVal);
        break;
      default:
        setProjectName("");
        setDescription("");
        setTag("");
        setType("Registration Form");
    }
  }

  return (
    <>
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        onClick={() => {
          StoreData(null, 'CLEAR_ALL');
          if (nextPage) {
            setNextPage(!nextPage)
          }
        }}
      />
      <label htmlFor="my-modal" className="modal" >
        <label
          htmlFor=""
          className="modal-box bg-base-100 rounded-md lg:w-lg lg:py-16 lg:px-20 max-w-5xl max-h-4/5 overflow-y-auto overflow-x-hidden w-11/12"
        >
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
                  value={projectName}
                  onChange={
                    (e) => {
                      StoreData(e.target.value, "ADD_PROJECT_NAME")
                    }
                  }
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
              value={description}
              onChange={
                (e) => {
                  StoreData(e.target.value, "ADD_DESCRIPTION")
                }
              }
            /> <br /><br />

            {/**Tag Section */}
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
              value={tag}
              onChange={
                (e) => {
                  StoreData(e.target.value, "ADD_TAG")
                }
              }
            /> <br /><br />

            {/**Project Type Section */}
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
            <select
              className="input w-full lg:w-textbox font-poppins bg-white text-gray-800 text-sm focus:outline-none border-gray-500 mt-4 rounded-sm"
            >
              <option value={ProjectType}>{ProjectType}</option>
            </select> <br /><br />
            <p className="lg:w-textbox text-gray-800 text-sm w-full">
              Registration Form: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <br /><br />

              an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
            <Schema />
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
                setNextPage(!nextPage);
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
