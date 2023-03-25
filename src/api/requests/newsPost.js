import { baseUrl } from "../url";

async function newsRequest(email) {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: email,
  });

  let response = await fetch(`${baseUrl}/newsletters/register`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
  return { ok: response.ok, ...data };
}

export default newsRequest;
