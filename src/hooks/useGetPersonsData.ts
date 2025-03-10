import { useQuery } from "@tanstack/react-query";
import { githubAxiosInstance } from "../axios";
import { githubRoutes } from "../constants/API_ROUTES.ts";
import { GitHubUser } from "../types/GithubUser.ts";

export const useGetPersonsData = () => {
  const state = useQuery({
    queryKey: ["profile"],
    queryFn: async () =>
      await githubAxiosInstance.get<GitHubUser>(
        githubRoutes.users.replace("{userName}", "glebAndronchyk"),
      ),
  });

  return state;
};
