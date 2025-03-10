import axios from "axios";

export const githubAxiosInstance = axios.create({
    baseURL: "https://api.github.com/",
});
