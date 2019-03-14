const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        loading: true
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case "LOG_IN":
      return {
        ...state,
        loading: true
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        authorized: true,
        key: action.payload.token,
        username: action.payload.username,
        error: "",
        loading: false
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        authorized: false,
        error: action.payload,
        loading: false
      };
    case "LOG_OUT":
      return {
        ...state,
        username: "",
        authorized: false,
        error: "",
        key: ""
      };
    case "SEARCH":
      return {
        ...state,
        loading: true
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        results: action.payload,
        error: "",
        loading: false,
        results: action.payload
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        results: [],
        error: action.payload,
        loading: false
      };
    case "GET_USER":
      return {
        ...state,
        username: action.payload,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
