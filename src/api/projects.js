import api from "./config";

export const getUserProjects = (page, limit) => {
  return api.get("/api/v1/projects", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });
};

export const createProject = () => {
  return api.post(
    "/api/v1/projects",
    {
      name: "test1",
      desc: "testing it",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`,
      },
    }
  );
};

export default { getUserProjects, createProject };
