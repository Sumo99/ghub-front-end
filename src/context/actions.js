import axios from "axios";

export const register = (dispatch, user) => {
  dispatch({ type: "REGISTER" });
  return axios
    .post(
      "https://github-user-breakdown-backend.herokuapp.com/api/auth/register",
      {
        username: user.username,
        email: user.email,
        password: user.password
      }
    )
    .then(() => {
      dispatch({ type: "REGISTER_SUCCESS" });
    })
    .catch(err => dispatch({ type: "REGISTER_ERROR", payload: err }));
};

export const login = (dispatch, user) => {
  dispatch({ type: "LOG_IN" });
  return axios
    .post(
      "https://github-user-breakdown-backend.herokuapp.com/api/auth/login",
      {
        username: user.username,
        password: user.password
      }
    )
    .then(res => {
      dispatch({
        type: "LOG_IN_SUCCESS",
        payload: {
          token: res.data.token,
          username: res.data.userData.username
        }
      });
      const userData = {
        userToken: res.data.token,
        userID: res.data.userData.id,
        username: res.data.userData.username
      };
      localStorage.setItem("userData", JSON.stringify(userData));
    })
    .catch(err =>
      dispatch({
        type: "LOG_IN_FAILURE",
        payload: err.response.data.message
      })
    );
};

// Looks like the search endpoint does not require auth AFAICT
export const search = (dispatch, query) => {
  dispatch({ type: "SEARCH" });
  return axios
    .get(
      `https://github-user-breakdown-backend.herokuapp.com/api/github/search/${query}`
    )
    .then(res => {
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: "SEARCH_FAILURE",
        payload: err.response.data.message
      });
    });
};

export const logout = dispatch => {
  dispatch({ type: "LOG_OUT" });
  localStorage.removeItem("userData");
};
