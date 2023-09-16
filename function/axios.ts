import axios from 'axios';

export const post = async (url: string, body: any): Promise<any> => {
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

export const get = async (url: string): Promise<any> => {
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

