import { projects, workspaces } from "../mock";
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

        rnd <= 5
          ? resolve("Submitted successfully 🙌")
          : reject("Oh no there was an error 😞");
      }, 2000);
    });
  };

  const { isLoading, status, value, error, execute } = useAsync(test);
  // execute();
  const result = { status, value };
  console.log({ isLoading, result, error, execute });
  return { isLoading, status, value, error, execute };
};
