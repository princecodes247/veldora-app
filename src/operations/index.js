import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { projects, submissions } from "../mock";
// import AuthOperations from "./auth.operation";

const test = (page, limit, target = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      // Paginate projects
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = target.slice(start, end);
      if (rnd <= 6) {
        resolve({ data, total: target.length, page, limit });
      } else {
        reject(new Error("An Error Occured"));
      }
    }, 2000);
  });
};

export const getUserProjects = (userId = "", page = 1, limit = 10) => {
  const { isLoading, data, error } = useQuery(
    [userId, "user-projects", { page, limit }],
    // () => test(page, limit, projects)
    () => api.projects.getUserProjects(page, limit)
  );

  console.log(data);
  return {
    isLoading,
    projects: data?.data?.data,
    controls: {
      totalCount: data?.data?.total,
      currentPage: data?.data?.page,
      pageSize: data?.data?.limit,
    },
    error,
  };
};

export const getProjectDetails = (projectId = "", page = 1, limit = 8) => {
  const { isLoading, data, error } = useQuery(
    ["project-details", projectId, { page, limit }],
    // () => test(page, limit, submissions)
    () => api.projects.getProjectDetails(projectId, page, limit)
  );

  console.log(data?.data);

  return {
    isLoading,
    project: data?.data?.project,
    submissions: data?.data?.submissions?.data,
    controls: {
      totalCount: data?.data?.submissions?.total,
      currentPage: data?.data?.submissions?.page,
      pageSize: data?.data?.submissions?.limit,
    },
    error,
  };
};

// exports = {
//   AuthOperations,
// };
