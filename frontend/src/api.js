import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (userDetails) => {
  try {
    return await apiClient.post("/auth/signin", { ...userDetails });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (userDetails) => {
  try {
    return await apiClient.post("/auth/signup", { ...userDetails });
  } catch (error) {
    return {
      error: true,
      message: error.response.data,
    };
  }
};

export const testRoute = async () => {
  try {
    return await apiClient.get("auth/test");
  } catch (error) {
    return {
      error: true,
      message: error.response.data,
    };
  }
};
