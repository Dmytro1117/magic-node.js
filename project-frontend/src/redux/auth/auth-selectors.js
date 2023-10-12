import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const isUserLogin = createSelector([selectAuth], (auth) => auth.isLogin);

export const getAuth = createSelector([selectAuth], (auth) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
});

export const getUser = createSelector([selectAuth], (auth) => auth.user);
