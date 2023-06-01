import { baseUrl } from "../api/url";

/**
 * @param {string} page
 * @param {string} token
 * @returns {null}
 */
export async function visitController({ page, token }) {
  const res = await fetch(`${baseUrl}/visits?page=${page}&token=${token??token}`);
  return await res.json()
}
