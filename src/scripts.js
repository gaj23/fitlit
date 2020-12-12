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
const detailedHydrationData = document.querySelector('.detailed-hydration-data-js');
const weeklyHydrationData = document.querySelector('.weekly-intake-js');
const avgHydrationIntakeData = document.querySelector('.avg-intake-js');

// Sleep
const sleepImg = document.querySelector('#sleep-image');
const sleepImgDetailed = document.querySelector('#sleep-image-detailed');
const sleepPage = document.querySelector('.sleep-detailed-view-js')

const allUser = new UserRepository(userData);
const user = new User(allUser.getUser(12));
const hydrationStats = new Hydration(hydrationData);

window.addEventListener('load', displaySummaryData);
hydrationImg.addEventListener('click', displayHydrationPage);
hydrationImgDetailed.addEventListener('click', displayHydrationPage);

sleepImg.addEventListener('click', displaySleepPage);
sleepImgDetailed.addEventListener('click', displaySleepPage);

function displaySummaryData() {
  greetUser();
  compareStepGoals();
  getUserSummaryData();
}

function greetUser() {
  userName.innerText = `Welcome, ${user.returnFirstName()}!`;
}

function compareStepGoals() {
  const avgGoal = allUser.calculateAvgStepGoal();
  const userGoal = user.dailyStepGoal;
  stepGoalComparison.innerText = ` Your step goal is: ${userGoal}. Across all users the average step goal is: ${avgGoal}.`;
}

function getUserSummaryData() {
  hydrationStats.getUserHydrationData(12);
  summaryHydrationData.innerText = `${hydrationStats.findDailyIntake('2019/06/15')}`;
  // summarySleepData.innerText = `${}`
  // summaryActivityData.innerText = `${}`
}

function displayHydrationPage() {
  togglePages(summaryPage, hydrationPage, calendar);
  hydrationStats.getUserHydrationData(12);
  detailedHydrationData.innerText = `${hydrationStats.findDailyIntake('2019/06/15')}`;
  weeklyHydrationData.innerHTML = `
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[0]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[1]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[2]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[3]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[4]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[5]}</span>
   <span>${hydrationStats.getWeeklyIntake('2019/06/15')[6]}</span>
  `;
  avgHydrationIntakeData.innerText = `${hydrationStats.calculateDailyAvgIntake()} oz`;
}

function displaySleepPage() {
  togglePages(summaryPage, sleepPage, calendar);
}

function togglePages(pageOne, pageTwo, pageThree) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
  pageThree.classList.toggle('hidden');
}