import { forms, workspaces } from "../mock";

export const getWorkspaceData = (id) => {
  console.log(id);
  return {
    members: [],
    quota: 200,
    forms,
  };
};

export const getUserWorkspaces = () => {
  return workspaces;
};
