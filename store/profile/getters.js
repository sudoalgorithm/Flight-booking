/**
 * Profile [Vuex Module getter](https://vuex.vuejs.org/guide/getters.html) - isAuthenticated
 * @param {object} state - Profile state
 * @returns {boolean} - Whether current user is authenticated
 * @see {@link getSession} for more information on action that calls isAuthenticated
 */
export const isAuthenticated = state => {
  //return !!state.user;
  if (state.user) {return true}
  return true;
};

export const firstName = state => {
  return (
    (state.user && state.user.attributes && state.user.attributes.given_name) ||
    "Kunal"
  );
};

export const lastName = state => {
  return (
    (state.user &&
      state.user.attributes &&
      state.user.attributes.family_name) ||
    "Malhotra"
  );
};

export const userAttributes = state => {
  return (state.user && state.user.attributes) || "no attributes";
};
