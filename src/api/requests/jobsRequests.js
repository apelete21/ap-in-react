import { baseUrl } from "../url";

export const getAllJobs = async () => {
  const headersList = {
    Accept: "*/*",
    content: "application/json",
  };

  const response = await fetch(`${baseUrl}/jobs`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  console.log(data);
  return { data, ok: response.ok };
};

export const getOneJob = async (title) => {
  const headersList = {
    Accept: "*/*",
    content: "application/json",
  };

  const response = await fetch(`${baseUrl}/jobs/find/${title}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  console.log(data);
  return { data, ok: response.ok };
};
