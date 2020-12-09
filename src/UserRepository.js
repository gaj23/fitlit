class UserRepository {
  constructor(data) {
    this.usersData = data;
  }

  getUser(id) {
    return this.usersData.find(user => {
      if (user.id === id) {
        return user;
      }
    });
  }

  calculateAvgStepGoal() {
      let avgStepGoals = this.usersData.reduce((acc, user) => {
        acc += user.dailyStepGoal;
        return acc;
      }, 0);
      return avgStepGoals / this.usersData.length;
    }
}

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}