import { baseUrl } from "../url";

const QuoteRequest = async (data) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(data);

  let response = await fetch(`${baseUrl}/quotes/register`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let result = await response.json();
  return { ...result, ok: response.ok };
};

export default QuoteRequest;
