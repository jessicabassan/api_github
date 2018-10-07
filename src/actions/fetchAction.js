import store from "../store";

//PROFILE
export const fetch_profile = () => {
  return {
    type: "FETCH_USER_PROFILE"
  };
};

export const receive_profile = post => {
  return {
    type: "FETCHED_USER_PROFILE",
    data: post
  };
};

export const receive_error_profile = () => {
  return {
    type: "RECEIVE_ERROR_PROFILE"
  };
};


//PROFILE
export const request_profile = username => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetch_profile());
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_profile(data));
      })
      .catch(err => dispatch(receive_error_profile()));
  };
};

//REPOSITORIES
export const fetch_repositories = () => {
  return {
    type: "FETCH_USER_REPOSITORIES"
  };
};

export const receive_repositories = post => {
  return {
    type: "FETCHED_USER_REPOSITORIES",
    data: post
  };
};

export const receive_error_repositories = () => {
  return {
    type: "RECEIVE_ERROR_REPOSITORIES"
  };
};

//REPOSITORIES
export const request_repositories = username => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetch_repositories());
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_repositories(data));
      })
      .catch(err => dispatch(receive_error_repositories()));
  };
};