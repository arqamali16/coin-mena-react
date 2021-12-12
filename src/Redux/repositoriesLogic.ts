import React from "react";
import _ from "lodash";
import { notification } from "antd";
import { kea } from "kea";
import axios from "axios";

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
      try {
        //https://run.mocky.io/v3/ae6e4a8d-d6a9-4da4-b4c9-1dea3ee388cb
        let { data } = await axios.get(
          "https://run.mocky.io/v3/0f57d790-7bac-4fe3-9b96-9a8313548515"
        );
        actions.setReposetories(data);
      } catch (err) {
        actions.setReposetories([]);
      }
    },
  }),
});

export default ReposetoriesLogic;
