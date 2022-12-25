import React, { useRef, useState } from "react";

export default function DeleteModal({ projectName = "" }) {
  const [name, setName] = useState("");
  const deleteModalRef = useRef();
  const handleDelete = () => {
    deleteModalRef.current.checked = false;
  };
  return (
    <>
      <input
        ref={deleteModalRef}
        type="checkbox"
        id="delete-modal"
        className="modal-toggle"
      />
      <label htmlFor="delete-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Are you sure?</h3>

          <p>
            This action cannot be undone. Please type <b>{projectName}</b> to
            confirm.
          </p>
          <input
            className="p-3 my-3 bg-base-200 rounded text-base-content w-full"
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {name === projectName && (
            <button
              type="button"
              onClick={handleDelete}
              className="btn w-full block bg-danger"
            >
              Delete the project, I understand the consquences
            </button>
          )}
        </label>
      </label>
    </>
  );
}
