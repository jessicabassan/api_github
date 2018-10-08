const initialState = {
  userData: {},
  repositoriesData: {},
  commitsData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    // PROFILE
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

    // REPOSITORIES
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

    // COMMITS
    case "FETCH_USER_COMMITS":
      return Object.assign({}, state, {
        commitsData: {},
        commitisFetching: true,
        commitIsError: false
      });
    case "FETCHED_USER_COMMITS":
      return Object.assign({}, state, {
        commitsData: action.data,
        commitisFetching: false,
        commitIsError: false
      });
    case "RECEIVE_ERROR_COMMITS":
      return Object.assign({}, state, {
        commitIsError: true,
        commitisFetching: false
      });
    default:
      return state;
  }
};

export default asyncReducer;