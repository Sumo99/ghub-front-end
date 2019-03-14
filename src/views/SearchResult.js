import React, { useEffect, useReducer } from "react";

import { DAYS_OF_WEEK, formatHour } from "../lib";
import {
  ProfileHeader,
  LanguageChart,
  BeeSwarmChart,
  MultiLineChart
} from "../components/SearchResults";

import "./SearchResult.scss";
import Axios from "axios";

const GH_USER_API = username => `https://api.github.com/users/${username}`;
const LANGUAGES_API = username =>
  `https://pipelinepy.herokuapp.com/?username=${username}`;
const PUNCHCARDS_API = username =>
  `https://calm-lake-18364.herokuapp.com/?username=${username}`;

// @TODO Add to this dictionary
const LANG_COLOR_DICT = {
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Makefile: "#427819"
};

const initialState = {
  user: {
    data: null,
    isLoading: false,
    error: null
  },
  languages: {
    data: null,
    isLoading: false,
    error: null
  },
  punchcards: {
    data: null,
    isLoading: false,
    error: null
  }
};

const parsers = {
  user: x => x,
  languages: dict =>
    Object.entries(dict).map(([language, size]) => ({
      language,
      size,
      color: LANG_COLOR_DICT[language] || "black"
    })),
  punchcards: obj =>
    Object.values(obj).map(({ Day, Hour, Commits }) => ({
      day: DAYS_OF_WEEK[+Day],
      hour: formatHour(+Hour),
      commits: +Commits
    }))
};

const combineReducers = obj => (initialState = {}, action) =>
  Object.entries(obj).reduce(
    (state, [key, reducerFn]) => ({
      ...state,
      [key]: reducerFn(state[key], action)
    }),
    initialState
  );

// Reducers
const user = (state = initialState.user, action) => {
  switch (action.type) {
    case "USER_FETCHING":
      return { ...state, isLoading: true };
    case "USER_FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "USER_FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const languages = (state = initialState.languages, action) => {
  switch (action.type) {
    case "LANGUAGES_FETCHING":
      return { ...state, isLoading: true };
    case "LANGUAGES_FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "LANGUAGES_FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const punchcards = (state = initialState.punchcards, action) => {
  switch (action.type) {
    case "PUNCHCARDS_FETCHING":
      return { ...state, isLoading: true };
    case "PUNCHCARDS_FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "PUNCHCARDS_FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  user,
  languages,
  punchcards
});

const handleError = dispatch => endpoint => err => {
  dispatch({
    type: `${endpoint.toUpperCase()}_FETCH_FAILURE`,
    payload:
      (err.response && err.response.data && err.response.data.message) ||
      `Something went wrong with the ${endpoint} endpoint and we didn't even get an error message. :(`
  });
};

const SearchResults = ({
  match: {
    params: { username }
  }
}) => {
  if (username == null) {
    throw new Error("No username provided in results view");
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchError = handleError(dispatch);

  useEffect(() => {
    [
      { type: "LANGUAGES_FETCHING" },
      { type: "USER_FETCHING" },
      { type: "PUNCHCARDS_FETCHING" }
    ].map(dispatch);
    Axios.get(GH_USER_API(username))
      .then(({ data }) => {
        dispatch({
          type: "USER_FETCH_SUCCESS",
          payload: data
        });
      })
      .catch(dispatchError("user"));
    Axios.get(LANGUAGES_API(username))
      .then(({ data }) => {
        dispatch({
          type: "LANGUAGES_FETCH_SUCCESS",
          payload: parsers.languages(data)
        });
      })
      .catch(dispatchError("languages"));
    Axios.get(PUNCHCARDS_API(username))
      .then(({ data }) => {
        dispatch({
          type: "PUNCHCARDS_FETCH_SUCCESS",
          payload: parsers.punchcards(data)
        });
      })
      .catch(dispatchError("punchcards"));
  }, []);

  return (
    <>
      <div className="Box py-2 container-lg d-flex flex-column flex-lg-row col-md-6 col-lg-12 flex-wrap flex-justify-around mt-4">
        <ProfileHeader
          user={state.user.data}
          isLoading={state.user.isLoading}
          error={state.user.error}
        />
        <LanguageChart
          languages={state.languages.data}
          isLoading={state.languages.isLoading}
          error={state.languages.error}
        />
      </div>
      <div className="container-lg d-flex flex-wrap flex-justify-around mb-4">
        <BeeSwarmChart
          commitsByHour={state.punchcards.data}
          isLoading={state.punchcards.isLoading}
          error={state.punchcards.error}
        />
        <MultiLineChart
          commitsByHour={state.punchcards.data}
          isLoading={state.punchcards.isLoading}
          error={state.punchcards.error}
        />
      </div>
    </>
  );
};

export default SearchResults;
