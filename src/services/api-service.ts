import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpPost } from 'interfaces/index';

function getTransformResponse() {
  return [(response) => response];
}

function parseResponse(res: AxiosResponse): Promise<any> {
  try {
    const response = res.data;
    if (response) {
      const parsedResult = JSON.parse(response).result;
      return parsedResult;
    }
    if (!response.success) {
      throw new Error(JSON.stringify(response));
    }
  } catch (error) {
    throw new Error(`Unable to parse response from server: ${error.message}`);
  }
}

export async function post({ url, body, rpc = true }: HttpPost): Promise<any> {
  if (rpc) {
    body.jsonrpc = body.jsonrpc || '2.0';
    body.id = body.id || 2
  }

  const options: AxiosRequestConfig = {
    method: 'POST',
    url,
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(body),
    transformResponse: getTransformResponse(),
    validateStatus: _ => {
      return true;
    }
  };
  const res = await axios.request(options);
  return parseResponse(res);
};

export async function get({ url }): Promise<any> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url
  };
  const result = await axios(options);
  return result.data.result;
};