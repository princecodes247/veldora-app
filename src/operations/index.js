import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { projects, submissions } from "../mock";

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
  return {
    isLoading,
    projects: data?.data,
    controls: {
      totalCount: data?.total,
      currentPage: data?.page,
      pageSize: data?.limit,
    },
    error,
  };
};

export const getProjectSubmissions = (projectId = "", page = 1, limit = 8) => {
  const { isLoading, data, error } = useQuery(
    ["project-submissions", projectId, { page, limit }],
    () => test(page, limit, submissions)
  );

  return {
    isLoading,
    submissions: data?.data,
    controls: {
      totalCount: data?.total,
      currentPage: data?.page,
      pageSize: data?.limit,
    },
    error,
  };
};
