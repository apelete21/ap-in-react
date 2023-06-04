import { baseUrl } from "../api/url";

export async function visitController({ page, token }) {
  const res = await fetch(`${baseUrl}/visits?page=${page}&token=${token??token}`);
  return await res.json()
}
