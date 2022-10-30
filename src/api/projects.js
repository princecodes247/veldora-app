import api from "./config";

export const getUserProjects = (page, limit) => {
  return api.get("/api/v1/projects", { withCredentials: true });
};

export const createProject = () => {
  return api.delete("/api/v1/auth/signout");
};

export default { getUserProjects, createProject };
