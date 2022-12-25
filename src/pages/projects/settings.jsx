import { useState } from "react";
import { useParams } from "react-router-dom";
import FormLayout from "../../components/layouts/FormLayout";
import DeleteModal from "../../components/modals/DeleteModal";
import { getProjectDetails } from "../../operations";
import { useEffect } from "react";

function ProjectSettings() {
  const { projectId } = useParams();
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const { project } = getProjectDetails(projectId, 1);

  useEffect(() => {
    setProjectName(project?.name ?? "");
    setProjectDesc(project?.description ?? "");
  }, [project]);

  return (
    <FormLayout projectName={projectName}>
      <section>
        <form action="" className="flex flex-col">
          <label className="my-3 w-full">
            <p>Project Name</p>
            <input
              type="text"
              className="p-3 mt-3 bg-base-200 rounded text-base-content w-full"
              placeholder="Current Name"
              value={projectName}
            />
          </label>
          <label className="my-3 w-full">
            <p>Project Description</p>
            <textarea
              placeholder="A project..."
              value={projectDesc}
              className="p-3 mt-3 bg-base-200 rounded text-base-content w-full resize-none"
            />
          </label>

          <button type="button" className="btn btn-primary my-5">
            Save Changes
          </button>
        </form>
        <label>
          <p>Delete this project</p>
          <label
            htmlFor="delete-modal"
            className="btn btn-error mt-3"
            type="button"
          >
            Delete Project
          </label>
          <DeleteModal projectName={projectName} />
        </label>
      </section>
    </FormLayout>
  );
}

export default ProjectSettings;
