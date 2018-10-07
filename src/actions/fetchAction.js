import store from "../store";

//PROFILE
export const fetch_profile = () => {
  return {
    type: "FETCH_USER"
  };
};

export const receive_profile = post => {
  return {
    type: "FETCHED_USER",
    data: post
  };
};

export const receive_error_profile = () => {
  return {
    type: "RECEIVE_ERROR"
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