let userName = document.querySelector('.greeting');

const allUser = new UserRepository(userData);
let user = new User(allUser.getUser(12));
console.log(`Welcome ${user.name}!`)