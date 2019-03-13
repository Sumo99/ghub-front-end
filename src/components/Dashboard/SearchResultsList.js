import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchResultsList = ({ results }) => (
  <div className="mt-4 d-flex flex-column flex-sm-row flex-wrap flex-justify-center">
    {results.map(({ username, avatar }) => (
      <Link to={`/results/${username}`} className="no-underline" key={username}>
        <div
          className="Box d-flex flex-justify-start flex-items-center box-shadow-medium px-1 pt-2 pb-3 m-2 position-relative rounded-1 overflow-hidden hover-grow"
          style={{ minWidth: "200px" }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
            width="72"
            height="72"
          />
          <h4 className="alt-h4 ml-2">{username}</h4>
          <div class="bg-blue position-absolute bottom-0 left-0 py-1 width-full" />
        </div>
      </Link>
    ))}
  </div>
);

export const SearchResultsListProps = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SearchResultsList;
