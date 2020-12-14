const helper = {
  getUserData: (userData, id) => {
    return userData.filter(data => data.userID === id);
  },

  getSpecificDate: (userData, date) => {
    const specificDay = userData.find(day => day.date === date);
    const week = userData.slice(specificDay, 7);
    return week;
  }
}


if (typeof module !== "undefined") {
  module.exports = helper;
}
