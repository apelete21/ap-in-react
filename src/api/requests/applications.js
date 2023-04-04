import { baseUrl } from "../url";

export const jobApplication = async (formData) => {
  if (!formData) return { message: "No data provided" };
  const headersList = {
    Accept: "*/*",
    content: "application/json",
  };

  const response = await fetch(`${baseUrl}/applications/register`, {
    method: "POST",
    headers: headersList,
    body: formData
  });

  const data = await response.json();
  return { data, ok: response.ok };
};
