import FormLayout from "../../components/layouts/FormLayout";

function ProjectSettings() {
  return (
    <FormLayout>
      <section>
        <form action="">
          <label>
            <p>Project Name</p>
            <input type="text" />
          </label>
          <label>
            <p>Project Description</p>
            <input type="text" />
          </label>
          <label>
            <p>Project Schema</p>
            <input type="text" />
          </label>
          <button className="btn">Save Changes</button>
        </form>
      </section>
    </FormLayout>
  );
}

export default ProjectSettings;
