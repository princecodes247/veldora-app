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
        console.log("from getUserProjects" + rnd);
        // resolve(projects);
        rnd <= 8 ? resolve(projects) : reject("An Error Occured");
      }, 2000);
    });
  };

  const { isLoading, status, value, error, execute } = useAsync(test, []);
  useEffect(() => {
    execute();
    console.log("nack");
  }, []);

  return { isLoading, status, projects: value, error };
};
