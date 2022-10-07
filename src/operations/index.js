import { projects, workspaces, submissions } from "../mock";
import { useEffect, useState, useCallback } from "react";

import { useAsync } from "../hooks";
import { useQuery } from "@tanstack/react-query";

const test = (page, limit, target = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      console.log("from rnd" + rnd);
      // Paginate projects
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = target.slice(start, end);
      console.log(target, data);
      rnd <= 6
        ? resolve({ data, total: target.length, page, limit })
        : reject("An Error Occured");
    }, 2000);
  });
};

export const getUserProjects = (userId = "", page = 1, limit = 10) => {
  const { isLoading, data, error } = useQuery(
    [userId, "user-projects", { page, limit }],
    () => test(page, limit, projects)
  );
  console.log(data);
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

export const getProjectSubmissions = (projectId = "", page = 1, limit = 2) => {
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
