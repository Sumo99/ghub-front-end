import React from "react";
import sumBy from "lodash/fp/sumBy";
import sortBy from "lodash/fp/sortBy";
import { format } from "d3";

import { ProfileHeader, LanguageChart } from "../components/SearchResults";

// Mock data
const _data = {
  user: {
    name: "Chance",
    login: "cembreyfarquhar",
    bio: "Making the web beautiful and functional",
    avatarUrl: "https://avatars1.githubusercontent.com/u/33612720?v=4",
    createdAt: "2017-11-13T02:40:03Z"
  },
  languages: [
    {
      name: "JavaScript",
      color: "#f1e05a",
      size: 47399
    },
    {
      name: "CSS",
      color: "#563d7c",
      size: 1558
    },
    {
      name: "HTML",
      color: "#e34c26",
      size: 2802
    },
    {
      name: "Makefile",
      color: "#427819",
      size: 3870
    }
  ]
};

const SearchResults = ({ data = _data }) => (
  <>
    <ProfileHeader user={data.user} />
    <div className="container-lg d-flex flex-wrap flex-justify-around">
      <LanguageChart languages={data.languages} />
    </div>
  </>
);

export default SearchResults;
