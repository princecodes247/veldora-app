import FormLayout from "../../components/layouts/FormLayout";
import { Table } from "../../components";
import { getProjectSubmissions } from "../../operations";

function Project() {
  const result = getProjectSubmissions();
  console.log(result);
  return (
    <FormLayout>
      <section>
        <Table isLoading={result.isLoading} list={result.submissions}></Table>
      </section>
    </FormLayout>
  );
}

export default Project;
