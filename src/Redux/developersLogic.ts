import React from "react";
import _ from "lodash";
import { notification } from "antd";
import { kea } from "kea";
import axios from "axios";

const DevelopersLogic = kea({
  path: () => ["kea", "developers"],

  defaults: {
    developers: [],
    loading: true,
  },

  actions: {
    loadDevelopers: true,
    setDevelopers: (developers: any) => ({ developers }),
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
        setDevelopers: (_: any, { developers }: any) => developers,
      },
    ],
  },

  listeners: ({ actions, values }: any) => ({
    loadDevelopers: async () => {
      try {
        //https://run.mocky.io/v3/ae6e4a8d-d6a9-4da4-b4c9-1dea3ee388cb
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
