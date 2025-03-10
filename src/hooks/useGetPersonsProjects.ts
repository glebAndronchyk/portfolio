import { useQuery } from "@tanstack/react-query";
import { githubAxiosInstance } from "../axios";
import { GitHubUser } from "../types/GithubUser.ts";
import { githubRoutes } from "../constants/API_ROUTES.ts";

export const useGetPersonsProjects = () => {
  const state = useQuery({
    queryKey: ["projects"],
    queryFn: async () =>
      await githubAxiosInstance.get<GitHubUser>(
        githubRoutes.projects.replace("{userName}", "glebAndronchyk"),
      ),
  });

  return state;
};
