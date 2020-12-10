let userName = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.step-goal-comparison');
let summaryPage = document.querySelector('.summary-view-js');
let summaryHydrationData = document.querySelector('.hydration-data-js');
let summarySleepData = document.querySelector('.sleep-data-js');
let summaryActivityData = document.querySelector('.activity-data-js');
let hydrationPage = document.querySelector('.hydration-detailed-view-js');
let hydrationImg = document.querySelector('#hydration-image');
let hydrationImgDetailed = document.querySelector('#hydration-image-detailed');
let calendar = document.querySelector('.detailed-calendar');

const allUser = new UserRepository(userData);
let user = new User(allUser.getUser(12));

window.addEventListener('load', displaySummaryData);
hydrationImg.addEventListener('click', displayHydrationPage);
hydrationImgDetailed.addEventListener('click', displayHydrationPage);

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

// function getUserSummaryData() {
//   summaryHydrationData.innerText = `${}`
//   summarySleepData.innerText = `${}`
//   summaryActivityData.innerText = `${}`
// }

function displayHydrationPage() {
   togglePages(summaryPage, hydrationPage, calendar);
}

function togglePages(pageOne, pageTwo, pageThree) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
  pageThree.classList.toggle('hidden');
}
