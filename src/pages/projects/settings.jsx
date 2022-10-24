import FormLayout from "../../components/layouts/FormLayout";

function ProjectSettings() {
  return (
    <FormLayout>
      <section>
        <form action="" className="flex flex-col">
          <label className="my-3 w-full">
            <p>Project Name</p>
            <input
              type="text"
              className="p-3 mt-3 bg-base-200 rounded text-base-content w-full"
              placeholder="Current Name"
            />
          </label>
          <label className="my-3 w-full">
            <p>Project Description</p>
            <input
              type="text"
              className="p-3 mt-3 bg-base-200 rounded text-base-content w-full"
            />
          </label>

          <button type="button" className="btn btn-primary my-5">
            Save Changes
          </button>
        </form>
        <label>
          <p>Delete this project</p>
          <button className="btn btn-error mt-3" type="button">
            Delete Project
          </button>
        </label>
      </section>
    </FormLayout>
  );
}

export default ProjectSettings;
