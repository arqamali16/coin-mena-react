import React from "react";
import _ from "lodash";
import { notification } from "antd";
import { kea } from "kea";
import axios from "axios";

//@ts-ignore
import githubTrendsApi from "github-trends-api";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
};

const ReposetoriesLogic = kea({
  path: () => ["kea", "reposetories"],

  defaults: {
    reposetories: [],
    loading: true,
  },

  actions: {
    loadReposetories: true,
    setReposetories: (repos: any) => ({ repos }),
  },

  events: ({ actions }: any) => ({
    afterMount: [actions.loadReposetories],
  }),

  reducers: {
    loading: {
      loadReposetories: () => true,
      setReposetories: () => false,
    },
    reposetories: [
      {},
      {
        setReposetories: (_: any, { repos }: any) => repos,
      },
    ],
  },

  listeners: ({ actions, values }: any) => ({
    loadReposetories: async () => {
      githubTrendsApi({ section: "developers", since: "weekly" })
        .then((result: any) => {
          console.log(result);
        })
        .catch((error: any) => {
          console.log(error);
        });
      //   try {
      //     let res = await axios.get(
      //       "https://gh-trending-api.herokuapp.com/repositories",
      //       { headers }
      //     );
      //     actions.setReposetories(res);
      //   } catch (err) {
      //     actions.setReposetories([]);
      //   }
    },
  }),
});

export default ReposetoriesLogic;
