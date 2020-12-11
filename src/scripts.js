const userName = document.querySelector('.greeting');
const stepGoalComparison = document.querySelector('.step-goal-comparison');
const summaryPage = document.querySelector('.summary-view-js');
const summaryHydrationData = document.querySelector('.hydration-data-js');
const summarySleepData = document.querySelector('.sleep-data-js');
const summaryActivityData = document.querySelector('.activity-data-js');
const hydrationPage = document.querySelector('.hydration-detailed-view-js');
const hydrationImg = document.querySelector('#hydration-image');
const hydrationImgDetailed = document.querySelector('#hydration-image-detailed');
const calendar = document.querySelector('.detailed-calendar');

const allUser = new UserRepository(userData);
const user = new User(allUser.getUser(12));

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
