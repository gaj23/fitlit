const helper = {
  getUserData: (userData, id) => {
    return userData.filter(data => data.userID === id);
  },

  getSpecificWeek: (userData, date) => {
    const specificDay = userData.find(day => day.date === date);
    const week = userData.slice(specificDay, 7);
    return week;
  },

  getSpecificDay(userData, date) {
    return userData.filter(day => day.date === date);
   }
}


if (typeof module !== "undefined") {
  module.exports = helper;
}
