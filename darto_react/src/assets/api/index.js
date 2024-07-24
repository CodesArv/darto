import axios from "axios";
import { endpoint } from "./endpoint";

async function createRequest({ headers, params, authToken }) {
  return axios.create({
    baseURL: endpoint.BASE_URL_STAGING,
    responseType: "json",
    crossdomain: true,
    headers: {
      "Content-Type": headers?.["Content-Type"] || "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + authToken,
      ...headers,
    },
    params,
  });
}

export const handleCatchBlock = () => {
  console.log("Something went wrong fetching apis");
};

export async function apiHandler({
  url,
  method,
  headers: reqHeaders,
  data: jsonData,
  params,
  authToken,
}) {
  try {
    const request = await createRequest({ reqHeaders, params, authToken });
    let result = [];
    switch (method) {
      case "POST":
        result = await request.post(url, jsonData);
        break;

      case "DELETE":
        result = await request.delete(url);
        break;
      case "PUT":
        result = await request.put(url, jsonData);
        break;

      default:
        result = await request.get(url);
    }
    const { data, headers } = result;
    return { data, headers };
  } catch (error) {
    handleCatchBlock();
    const { data, headers } = error.response;
    return { data, headers };
  }
}
