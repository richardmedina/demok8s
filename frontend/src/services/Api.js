import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_APIURL ?? "https://localhost:7114/api";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000,
  headers: { } // no headers provided
});


class Api {

  constructor(axiosInstance) {
    const client = axiosInstance;

    this.user = {
      get: () => client.get("/user"),
      getById: (userId) => client.get(`/user/${userId}`),
      create: (postUser) => client.post(postUser),
      update: (putUser) => client.put(putUser)
    };

    this.server = {
      getInfo: () => client.get("/server/info")
    };
  }
}

export default new Api(axiosInstance);
