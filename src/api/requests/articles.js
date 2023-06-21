import { baseUrl } from "../url";

export const imgUrl = `${baseUrl}/picture`

export const articleReq = async (title) => {
    let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let response = await fetch(`${baseUrl}/article/${title}`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return { ok: response.ok, data };
}