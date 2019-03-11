import React from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const ProfileHeader = ({ user }) => (
  <header className="container-lg mt-4 d-flex">
    <figure className="u-photo col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
      <img
        className="width-full avatar mb-2 mb-md-0"
        alt={user.name}
        src={user.avatarUrl}
      />
    </figure>
    <div className="vcard-names-container py-3 js-sticky js-user-profile-sticky-fields">
      <h1 className="vcard-names">
        <span className="p-name vcard-fullname d-block overflow-hidden border-bottom">
          {user.name}
        </span>
        <span className="text-gray f1-light p-nickname vcard-username d-block">
          {user.login}
        </span>
      </h1>
      <span className="text-gray f3 p-nickname vcard-username d-block">
        GitHub member since {distanceInWordsToNow(new Date(user.createdAt))} ago
      </span>
    </div>
  </header>
);

export const ProfileHeaderProps = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  }).isRequired
};

ProfileHeader.propTypes = ProfileHeaderProps;

export default ProfileHeader;
