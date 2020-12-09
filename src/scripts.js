let userName = document.querySelector('.greeting');

const allUser = new UserRepository(userData);
let user = new User(allUser.getUser(12));

window.addEventListener('load', greetUser);

function greetUser() {
  console.log(user)
  userName.innerText = `Welcome, ${user.returnFirstName()}!`
}
