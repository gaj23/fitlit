const helper = {
  getUserData: (userData, id) => {
    return userData.filter(data => data.userID === id);
  },

//   calculateDailyAvg: (userData) => {
//     return userData.reduce((acc, user) => {
//       acc += user.
//     })
//   }
// }
}

if (typeof module !== "undefined") {
  module.exports = helper;
}
