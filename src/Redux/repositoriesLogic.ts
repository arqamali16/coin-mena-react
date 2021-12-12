import _ from "lodash";
import { kea } from "kea";
import axios from "axios";

import { IRepository } from "../Types/RepositoriesIntefaces";

const ReposetoriesLogic = kea({
  path: () => ["kea", "reposetories"],

  defaults: {
    reposetories: [],
    loading: true,
  },

  actions: {
    loadReposetories: true,
    setReposetories: (repos: IRepository) => ({ repos }),
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
        setReposetories: (_: any, { repos }: { repos: IRepository }) => repos,
      },
    ],
  },

  listeners: ({ actions, values }: any) => ({
    loadReposetories: async () => {
      try {
        // https://gh-trending-api.herokuapp.com/repositories - mocked
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
