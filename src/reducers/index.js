const initialState = {
  userData: {},
  repositoriesData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE":
      return Object.assign({}, state, {
        userData: {},
        isFetching: true,
        isError: false
      });
    case "FETCHED_USER_PROFILE":
      return Object.assign({}, state, {
        userData: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_ERROR_PROFILE":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });

      case "FETCH_USER_REPOSITORIES":
      return Object.assign({}, state, {
        repositoriesData: {},
        isFetching: true,
        isError: false
      });
    case "FETCHED_USER_REPOSITORIES":
      return Object.assign({}, state, {
        repositoriesData: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_ERROR_REPOSITORIES":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
};

export default asyncReducer;