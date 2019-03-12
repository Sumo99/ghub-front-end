import React from "react";
import PropTypes from "prop-types";

const SearchResultsList = ({ results }) => (
  <div className="Box mt-4">
    <ul>
      {results.map(({ id, username, email, activity }) => (
        <li className="Box-row d-flex flex-justify-between" key={id}>
          <strong>{username}</strong> <span className="ml-4">{email}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const SearchResultsListProps = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      // I'm not sure what this is supposed to be yet
      activity: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
  ).isRequired
};

export default SearchResultsList;
