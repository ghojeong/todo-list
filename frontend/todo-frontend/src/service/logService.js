import axios from "./axios";

const logService = {
  postLog: async (newLog) => {
    const response = await axios.post("/logs", newLog);
    return response.data;
  },
  getLog: async () => {
    const response = await axios.get("/logs");
    return response.data;
  },
};

export default logService;
