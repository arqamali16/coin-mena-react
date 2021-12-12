import React from "react";
import { Card } from "antd";
import { useValues } from "kea";

import ReposetoriesLogic from "../../Redux/repositoriesLogic";

const Repositories = () => {
  const { reposetories } = useValues(ReposetoriesLogic);

  console.log(reposetories);

  return (
    <Card>
      <div>hi</div>
    </Card>
  );
};

export default Repositories;
