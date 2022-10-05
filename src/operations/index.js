import { projects, workspaces } from "../mock";
import { useEffect, useState, useCallback } from "react";

import { useAsync } from "../hooks";

export const getWorkspaceData = (id) => {
  console.log(id);
  return {
    members: [],
    quota: 200,
    projects,
  };
};

export const getUserProjects = () => {
  const test = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        console.log(rnd);
        resolve(projects);
        // rnd <= 5 ? resolve(projects) : reject({});
      }, 2000);
    });
  };

  const { isLoading, status, value, error, execute } = useAsync(test, []);
  useEffect(() => {
    // execute();
    console.log("nack");
  }, []);

  return { isLoading, status, projects: value, error };
};
