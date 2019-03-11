import React from "react";
import sumBy from "lodash/fp/sumBy";
import sortBy from "lodash/fp/sortBy";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const formatPct = num => `${Math.round(num * 100)}%`;

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

const SearchResults = ({ data = _data }) => {
  const languageSizeTotal = sumBy("size", data.languages);
  return (
    <>
      <header className="container-lg mt-4 d-flex">
        <figure className="u-photo col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
          <img
            className="width-full avatar mb-2 mb-md-0"
            src={data.user.avatarUrl}
          />
        </figure>
        <div className="vcard-names-container py-3 js-sticky js-user-profile-sticky-fields">
          <h1 className="vcard-names">
            <span className="p-name vcard-fullname d-block overflow-hidden border-bottom">
              {data.user.name}
            </span>
            <span className="text-gray f1-light p-nickname vcard-username d-block">
              {data.user.login}
            </span>
          </h1>
          <span className="text-gray f3 p-nickname vcard-username d-block">
            GitHub member since{" "}
            {distanceInWordsToNow(new Date(data.user.createdAt))} ago
          </span>
        </div>
      </header>
      <section className="container-lg mt-4">
        <h2 className="py-3 border-bottom">Language usage</h2>
        <dl className="mt-2 list-style-none">
          {sortBy("size", data.languages)
            .reverse()
            .map(({ name, color, size }) => (
              <>
                <dt key={name} className="col-2 py-2">
                  <strong>{name}</strong> {formatPct(size / languageSizeTotal)}
                </dt>
                <dd>
                  <div
                    style={{
                      height: "1rem",
                      backgroundColor: color,
                      width: formatPct(size / languageSizeTotal),
                      textShadow: "1px 1px 1px white"
                    }}
                    className="mx-3"
                  />
                </dd>
              </>
            ))}
        </dl>
      </section>
    </>
  );
};

export default SearchResults;
