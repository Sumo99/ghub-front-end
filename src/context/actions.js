import axios from "axios";
import { toast } from 'react-toastify';

export const register = (dispatch, user) => {
  dispatch({ type: "REGISTER" });
  return new Promise((resolve, reject) => {
    axios
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
        toast.success('Thanks for registering!')
        resolve();
      })
      .catch(() => {
        dispatch({
          type: "REGISTER_FAILURE",
          payload: "This username or email already exists"
        });
        toast.error('This username or email already exists')
        reject();
      });
  });
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
      toast.success(res.data.message);
    })
    .catch(err => {
      dispatch({
        type: "LOG_IN_FAILURE",
        payload: err.response.data.message
      })
      toast.error(err.response.data.message)
    });
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
      toast.error(err.response.data.message)
    });
};

export const logout = dispatch => {
  dispatch({ type: "LOG_OUT" });
  localStorage.removeItem("userData");
  toast.info('Goodbye for now!')
};
