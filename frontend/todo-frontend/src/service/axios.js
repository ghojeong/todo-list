import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.125.81.156:8080/",
  timeout: 1000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

export default instance;
