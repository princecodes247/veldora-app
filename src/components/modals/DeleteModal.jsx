import React from "react";

export default function DeleteModal() {
  return (
    <>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <label htmlFor="delete-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Are you sure?</h3>

          <p>
            This action cannot be undone. Please type <b>prrroject</b> to
            confirm.
          </p>
          <input
            className="p-3 mt-3 bg-base-200 rounded text-base-content w-full"
            type="text"
            placeholder="Project Name"
          />

          <button type="button">
            Delete the project, I understand the consquences
          </button>
        </label>
      </label>
    </>
  );
}
