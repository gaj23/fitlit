class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUser = (id) => {
    return this.users.find(obj => {
      return obj.id === id;
    });
  }
}


module.exports = UserRepository;