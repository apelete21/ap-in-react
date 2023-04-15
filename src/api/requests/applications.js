import { baseUrl } from "../url";

export const jobApplication = async (formData) => {
  if (!formData) return { message: "No data provided" };

  const response = await fetch(`${baseUrl}/applications/register`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return { data, ok: response.ok };
};
