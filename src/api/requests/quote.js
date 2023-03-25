import { baseUrl } from "../url";

const QuoteRequest = async (data) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(data);

  let response = await fetch(`${baseUrl}/quotes/register`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let result = await response.json();
  console.log(result);
  return { ...result, ok: response.ok };
};

export default QuoteRequest;
