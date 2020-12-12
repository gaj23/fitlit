const helper = {
  getUserData: (userData, id) => {
    return userData.filter(data => data.userID === id);
  }
}


if (typeof module !== "undefined") {
  module.exports = helper;
}
