import { projects, workspaces, submissions } from "../mock";
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
        // reject("An Error Occured");
        rnd <= 6 ? resolve(projects) : reject("An Error Occured");
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

export const getProjectSubmissions = () => {
  const test = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        console.log("from getProjectSubmissions" + rnd);
        // resolve(submissions);
        // reject("An Error Occured");
        rnd <= 6 ? resolve(submissions) : reject("An Error Occured");
      }, 2000);
    });
  };

  const { isLoading, status, value, error, execute } = useAsync(test, []);
  useEffect(() => {
    execute();
  }, []);

  return { isLoading, status, submissions: value, error };
};
