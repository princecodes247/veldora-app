import { useState } from "react";
import { useParams } from "react-router-dom";
import FormLayout from "../../components/layouts/FormLayout";
import { PaginationBar, Table } from "../../components";
import { getProjectDetails } from "../../operations";

function Project() {
  const { projectId } = useParams();
  const [page, setPage] = useState(1);
  const result = getProjectDetails(projectId, page);
  const { currentPage, pageSize, totalCount } = result.controls;

  // Flatten each submission in the result to a single row
  const rows = result?.submissions?.map((submission) => {
    const row = {};
    Object.entries(submission).forEach(([key, value]) => {
      if (typeof value === "object") {
        Object.entries(value).forEach(([subKey, subValue]) => {
          row[subKey] = subValue;
        });
      } else {
        row[key] = value;
      }
    });
    return row;
  });
  return (
    <FormLayout projectName={result?.project?.name}>
      <section>
        <Table isLoading={result.isLoading} list={rows} />
        <PaginationBar
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={totalCount}
          onPageChange={setPage}
        />
      </section>
    </FormLayout>
  );
}

export default Project;
