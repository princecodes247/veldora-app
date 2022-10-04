import { projects, workspaces } from "../mock";

export const getWorkspaceData = (id) => {
  console.log(id);
  return {
    members: [],
    quota: 200,
    projects,
  };
};

export const getUserProjects = async () => {
  return projects;
};
