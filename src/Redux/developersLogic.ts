import _ from "lodash";
import { kea } from "kea";
import axios from "axios";

import { IDeveloper } from "../Types/DeveloperInterface";

const DevelopersLogic = kea({
  path: () => ["kea", "developers"],

  defaults: {
    developers: [],
    loading: true,
  },

  actions: {
    loadDevelopers: true,
    setDevelopers: (developers: IDeveloper) => ({ developers }),
  },

  events: ({ actions }: any) => ({
    afterMount: [actions.loadDevelopers],
  }),

  reducers: {
    loading: {
      loadDevelopers: () => true,
      setDevelopers: () => false,
    },
    developers: [
      {},
      {
        setDevelopers: (_: any, { developers }: { developers: IDeveloper }) =>
          developers,
      },
    ],
  },

  listeners: ({ actions, values }: any) => ({
    loadDevelopers: async () => {
      try {
        // https://gh-trending-api.herokuapp.com/developers - mocked
        let { data } = await axios.get(
          "https://run.mocky.io/v3/ae6e4a8d-d6a9-4da4-b4c9-1dea3ee388cb"
        );
        actions.setDevelopers(data);
      } catch (err) {
        actions.setDevelopers([]);
      }
    },
  }),
});

export default DevelopersLogic;
