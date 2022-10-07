import { useState } from "react";
import FormLayout from "../../components/layouts/FormLayout";
import { PaginationBar, Table } from "../../components";
import { getProjectSubmissions } from "../../operations";
import { useParams } from "react-router-dom";

function Project() {
  let { projectId } = useParams();
  const [page, setPage] = useState(1);
  const result = getProjectSubmissions(projectId, page);
  // Flatten each submission in the result to a single row
  const rows = result?.submissions?.map((submission) => {
    const row = {};
    for (const [key, value] of Object.entries(submission)) {
      if (typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          row[subKey] = subValue;
        }
      } else {
        row[key] = value;
      }
    }
    return row;
  });
  return (
    <FormLayout>
      <section>
        <Table isLoading={result.isLoading} list={rows}></Table>
        <PaginationBar {...result.controls} onPageChange={setPage} />
      </section>
    </FormLayout>
  );
}

export default Project;
