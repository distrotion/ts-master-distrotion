import axios from 'axios';

export async function post(url: string, body: any): Promise<any> {
  let output: any;
  await axios.post(url, body)
    .then(async (res) => {
      output = res.data;
    })
    .catch(async (error) => {
      console.error(error.response.status);
      output = await error.response.status;
    });
  return output;
};

export async function get(url: string): Promise<any> {
  let output: any;
  await axios.get(url)
    .then(async (res) => {
      output = res.data;
    })
    .catch(async (error) => {
      console.error(error.response.status);
      output = await error.response.status;
    });
  return output;
};

