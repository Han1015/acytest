const BASE_URL = "http://localhost:4008";

// authorization
const login = BASE_URL + "/auth/login/email";
const logout = BASE_URL + "/me/user/logout";
const userInfo = BASE_URL + "/me/user/info";

// analysis
const analysisList = BASE_URL + "/post/analysis?per_page=12&page=1";
const favoritePost = BASE_URL + "/me/user/favourite/post-analysis/";

export { login, logout, userInfo, analysisList, favoritePost };
