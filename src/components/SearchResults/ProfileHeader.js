import React from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Octicon, {
  Mail,
  Location,
  Info,
  Link,
  MarkGithub,
  Alert
} from "@githubprimer/octicons-react";
import { toast } from "react-toastify";

import LoadingWheel from "../Loading/LoadingWheel";

const ProfileHeader = ({ user, isLoading, error }) => {
  if (isLoading) {
    return <LoadingWheel text="profile information." />;
  } else if (error) {
    toast.error(error);
    return (
      <div className="d-flex flex-column flex-justify-center flex-items-center">
        <Octicon icon={Alert} size="large" />
        <span>Something went wrong.</span>
      </div>
    );
  } else
    return (
      <header className="d-flex col-12 col-lg-6">
        <div
          className="d-flex flex-column px-4 py-2"
          style={{ height: "100%" }}
        >
          <img
            className="avatar"
            width="100px"
            height="100px"
            alt={user.name || user.login}
            src={user.avatar_url}
          />
        </div>
        <div className="vcard-names-container js-sticky js-user-profile-sticky-fields">
          <h2 className="Subhead mb-1">{user.name || user.login}</h2>
          <span className="text-gray f5 d-block mb-3">
            GitHub member since{" "}
            {distanceInWordsToNow(new Date(user.created_at))} ago
          </span>
          <h4 className="mt-2 Subhead">
            <Octicon icon={MarkGithub} size="small" />
            <a
              className="text-blue ml-3 f5"
              target="_blank"
              href={user.html_url}
            >
              @{user.login}
            </a>
          </h4>
          <h4 className="mt-2 Subhead">
            <Octicon icon={Mail} size="small" />
            <span className="ml-3 f5">{user.email || "Unavailable"}</span>
          </h4>
          <h4 className="mt-2 Subhead">
            <Octicon icon={Location} size="small" />
            <span className="ml-3 f5">{user.location || "Unavailable"}</span>
          </h4>
          <h4 className="mt-2 Subhead d-block">
            <Octicon icon={Info} size="small" />
            <span className="ml-3 f5">{user.bio || "Unavailable"}</span>
          </h4>
          <h4 className="mt-2 Subhead">
            <Octicon icon={Link} size="small" />
            <a
              className="text-gray ml-3 f5"
              target="_blank"
              href={user.blog || "#"}
            >
              {user.blog || "Unavailable"}
            </a>
          </h4>
        </div>
      </header>
    );
};

export const ProfileHeaderProps = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
};

ProfileHeader.propTypes = ProfileHeaderProps;

export default ProfileHeader;
