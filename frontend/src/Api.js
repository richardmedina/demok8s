import axios from 'axios';

const apiBaseUrl = "https://localhost:7114/api"; // https://localhost:7114/api/user

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000,
  headers: { } // no headers provided
});


class Api {

  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;

    this.user = {
      get: () => this.axiosInstance.get("/user"),
      getById: (userId) => this.axiosInstance.get(`/user/${userId}`),
      create: (postUser) => this.axiosInstance.post(postUser),
      update: (putUser) => this.axiosInstance.put(putUser)
    };
  }
}

export default new Api(axiosInstance);
