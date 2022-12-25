import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";
import { createProject } from "../../api/projects";

export default function CreateProjectModal() {
  const createModalRef = useRef();
  const handleCreate = () => {
    createModalRef.current.checked = false;
  };
  return (
    <>
      <input
        ref={createModalRef}
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <label htmlFor="my-modal" className="modal">
        <label className="modal-box bg-base-100 rounded-md lg:w-lg lg:py-16 lg:px-20 max-w-5xl max-h-4/5 overflow-y-auto overflow-x-hidden w-11/12">
          <input type="checkbox" className="hidden" name="" id="" />
          <h2 className="text-xl ">Create a Project</h2>
          <div className="form-control mt-6 w-full max-w-none flex-1">
            <label className="label">
              <span className="label-text text-sm">Project Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Project Name"
              // value={Project Name}
              // onChange={(e) => setProject Name(e.target.value)}
              className="input input-bordered h-full py-3 text-sm w-full"
              required
            />
          </div>
          <div className="form-control w-full mt-6 max-w-none flex-1">
            <label className="label">
              <span className="label-text text-sm">
                Project Description (optional):
              </span>
            </label>
            <textarea
              type="text"
              className="input input-bordered h-full py-3 text-sm w-full"
              placeholder="Project Description"
              // value={productDesc}
              // onChange={(e) => setProductDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-6 w-full">
            <button onClick={handleCreate} className="btn w-full btn-primary">
              Create! 🔥
            </button>
          </div>
        </label>
      </label>
    </>
  );
}
