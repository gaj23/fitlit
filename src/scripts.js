const userName = document.querySelector('.greeting');
const summaryPage = document.querySelector('.summary-view-js');
const stepGoalComparison = document.querySelector('.step-goal-comparison');
const calendar = document.querySelector('.detailed-calendar');

// hydration
const summaryHydrationData = document.querySelector('.hydration-data-js');
const hydrationPage = document.querySelector('.hydration-detailed-view-js');
const hydrationImg = document.querySelector('#hydration-image');
const hydrationImgDetailed = document.querySelector('#hydration-image-detailed');
const detailedHydrationData = document.querySelector('.detailed-hydration-data-js');
const weeklyHydrationData = document.querySelector('.weekly-intake-js');
const avgHydrationIntakeData = document.querySelector('.avg-intake-js');

// Sleep
const summarySleepData = document.querySelector('.sleep-data-js');
const sleepPage = document.querySelector('.sleep-detailed-view-js');
const sleepImg = document.querySelector('#sleep-image');
const sleepImgDetailed = document.querySelector('#sleep-image-detailed');
const dayHoursSlept = document.querySelector('.day-hours-slept-js');
const daySleepQuality = document.querySelector('.day-sleep-quality-js');
const weeklyHoursSlept = document.querySelector('.weekly-hours-slept-js');
const allTimeHoursSlept = document.querySelector('.all-time-hours-slept-js');
const allTimeSleepQuality = document.querySelector('.all-time-sleep-quality');

// Activity
const summaryActivityData = document.querySelector('.activity-data-js');
const activityPage = document.querySelector('.activity-detailed-view-js');
const activityImg = document.querySelector('#activity-image');
const activityImgDetailed = document.querySelector('#activity-image-detailed')


const allUser = new UserRepository(userData);
const user = new User(allUser.getUser(12));
const hydrationStats = new Hydration(hydrationData);

window.addEventListener('load', displaySummaryData);
hydrationImg.addEventListener('click', displayHydrationPage);
hydrationImgDetailed.addEventListener('click', displayHydrationPage);
sleepImg.addEventListener('click', displaySleepPage);
sleepImgDetailed.addEventListener('click', displaySleepPage);
activityImg.addEventListener('click', displayActivityPage);
activityImgDetailed.addEventListener('click', displayActivityPage);

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
  summaryHydrationData.innerText = `${hydrationStats.findDailyIntake('2019/06/15', 12)}`;
  // summarySleepData.innerText = `${}`
  // summaryActivityData.innerText = `${}`
}

function displayHydrationPage() {
   togglePages(summaryPage, hydrationPage, calendar);
   displayDailyIntake();
   displayWeeklyIntake();
   displayAvgIntake();
}

function displayDailyIntake() {
  detailedHydrationData.innerText = `${hydrationStats.findDailyIntake('2019/06/15', 12)}`;
}

function displayWeeklyIntake() {
  weeklyHydrationData.innerHTML = `
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[0]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[1]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[2]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[3]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[4]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[5]}</span>
  <span>${hydrationStats.getWeeklyIntake('2019/06/15', 12)[6]}</span>
 `;
}

function displayAvgIntake() {
  avgHydrationIntakeData.innerText = `${hydrationStats.calculateDailyAvgIntake(12)} oz`;
}

function displaySleepPage() {
  togglePages(summaryPage, sleepPage, calendar);
  //call necessary functions for setup (separate helper function?)
  //dayHoursSlept.innerText = `${}`;
  // summarySleepData.innerText = `${}`  Should this be the same to DRY up code?
  //daySleepQuality.innerText = `${}`;
  //weeklyHoursSlept.innerHTML = `
  //  <span>${}</span>
  //  <span>${}</span>
  //  <span>${}</span>
  //  <span>${}</span>
  //  <span>${}</span>
  //  <span>${}</span>
  //  <span>${}</span>
  // `;
  // (DRY up code?), repeat of hydration
  //allTimeHoursSlept.innerText = `${}`;
  //allTimeSleepQuality.innerText = `${}`;
}

function displayActivityPage() {
  togglePages(summaryPage, activityPage, calendar)
}

function togglePages(pageOne, pageTwo, pageThree) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
  pageThree.classList.toggle('hidden');
}