import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchResultsList = ({ results }) => (
  <div className=" mt-4 d-flex flex-column flex-md-row flex-wrap">
    {results.map(({ username, avatar }) => (
      <Link to={`/results/${username}`} className="mx-1 my-3" key={username}>
        <div
          className="Box d-flex flex-justify-start flex-items-between"
          style={{ minWidth: "200px" }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
            width="72"
            height="72"
          />
          <strong className="ml-3 mb-2">{username}</strong>
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
