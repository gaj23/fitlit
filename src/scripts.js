let userName = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.step-goal-comparison');

const allUser = new UserRepository(userData);
let user = new User(allUser.getUser(12));

window.addEventListener('load', displaySummaryData);

function displaySummaryData() {
  greetUser();
  compareStepGoals();
}

function greetUser() {
  userName.innerText = `Welcome, ${user.returnFirstName()}!`;
}

function compareStepGoals() {
  const avgGoal = allUser.calculateAvgStepGoal();
  const userGoal = user.dailyStepGoal;
  stepGoalComparison.innerText = ` Your step goal is: ${userGoal}. Across all users the average step goal is: ${avgGoal}.`;
}

