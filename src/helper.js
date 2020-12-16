const helper = {
  getUserData: (userData, id) => {
    return userData.filter(data => data.userID === id);
  },

  getSpecificWeek: (userData, date) => {
    const specificDay = userData.findIndex(day => day.date === date);
    const week = userData.slice(specificDay, (specificDay + 7));
    return week;
  }
}


if (typeof module !== "undefined") {
  module.exports = helper;
}