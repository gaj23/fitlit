// summary page
const userName = document.querySelector('.greeting');
const summaryPage = document.querySelector('.summary-view-js');
const calendar = document.querySelector('#calendar');
const hydrationImg = document.querySelector('#hydration-image');
const summaryHydrationData = document.querySelector('.hydration-data-js');
const sleepImg = document.querySelector('#sleep-image');
const summarySleepData = document.querySelector('.sleep-data-js');
const stepGoalComparison = document.querySelector('.step-goal-comparison');
const summaryActivityData = document.querySelector('.activity-data-js');

// hydration
const hydrationPage = document.querySelector('.hydration-detailed-view-js');
const hydrationImgDetailed = document.querySelector('#hydration-image-detailed');
const detailedHydrationData = document.querySelector('.detailed-hydration-data-js');
const weeklyHydrationData = document.querySelector('.weekly-intake-js');
const avgHydrationIntakeData = document.querySelector('.avg-intake-js');

// Sleep
const sleepPage = document.querySelector('.sleep-detailed-view-js');
const sleepImgDetailed = document.querySelector('#sleep-image-detailed');
const dayHoursSlept = document.querySelector('.day-hours-slept-js');
const daySleepQuality = document.querySelector('.day-sleep-quality-js');
const weeklyHoursSlept = document.querySelector('.weekly-hours-slept-js');
const allTimeHoursSlept = document.querySelector('.all-time-hours-slept-js');
const allTimeSleepQuality = document.querySelector('.all-time-sleep-quality-js');

// Activity
const activityPage = document.querySelector('.activity-detailed-view-js');
const activityImg = document.querySelector('#activity-image');
const activityImgDetailed = document.querySelector('#activity-image-detailed')


const allUsers = new UserRepository(userData);
const user = new User(allUsers.getUser(12));
const hydrationStats = new Hydration(hydrationData);
// const allSleepStats = new SleepRepo(sleepData);
const sleepStats = new Sleep(sleepData);
// const activityStats = new Activity(activityData);
let date = '2019/06/15'

window.addEventListener('load', displaySummaryData);
calendar.addEventListener('change', resetData);
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

function getDate() {
  const newDate = calendar.value;
  let dataDate = newDate.replace('-', '/');
  dataDate = dataDate.replace('-', '/');
  return date = dataDate;
}

function compareStepGoals() {
  stepGoalComparison.innerText = ` Your step goal is: ${user.dailyStepGoal}. Across all users the average step goal is: ${allUsers.calculateAvgStepGoal()}.`;
}

function getUserSummaryData() {
  summaryHydrationData.innerText = `${hydrationStats.findDailyIntake(date, 12)}`;
  summarySleepData.innerText = `${sleepStats.findDailyHrsSlept(date, 12)}`;
  summaryActivityData.innerText = `${user.dailyStepGoal}`;
}

function resetData() {
  getDate();
  getUserSummaryData();
  resetHydrationPage();
  resetSleepPage();
}

function displayHydrationPage() {
  togglePages(summaryPage, hydrationPage);
  displayDailyIntake();
  displayAvgIntake();
  displayWeeklyIntake();
}

function displayDailyIntake() {
  detailedHydrationData.innerText = `${hydrationStats.findDailyIntake(date, 12)}`;
}

function displayWeeklyIntake() {
  const weeklyStats = hydrationStats.getWeeklyIntake(date, 12)
  const spacedWeeklyStats = weeklyStats.join(', ')
  getWeeklyData(weeklyHydrationData, spacedWeeklyStats);
}

function displayAvgIntake() {
  avgHydrationIntakeData.innerText = `${hydrationStats.calculateDailyAvgIntake(12)} oz`;
}

function resetHydrationPage() {
  displayDailyIntake();
  displayWeeklyIntake();
  displayAvgIntake();
}

function displaySleepPage() {
  togglePages(summaryPage, sleepPage);
  resetSleepPage();
}

function resetSleepPage() {
  dayHoursSlept.innerText = `${sleepStats.findDailyHrsSlept(date, 12)}`;
  daySleepQuality.innerText = `${sleepStats.findDailySleepQuality(date, 12)}`;
  allTimeHoursSlept.innerText = `${sleepStats.calculateDailyAvgHoursSlept(12)}`;
  allTimeSleepQuality.innerText = `${sleepStats.calculateDailyAvgSleepQuality(12)}`;
  const weeklyStats = sleepStats.calculateWeeklyHrsSlept(date, 12)
  const spacedWeeklyStats = weeklyStats.join(', ')
  getWeeklyData(weeklyHoursSlept, spacedWeeklyStats);
}


function getWeeklyData(selector, method) {
  selector.innerHTML = `
<span>${method}</span>
`;
}

function displayActivityPage() {
  togglePages(summaryPage, activityPage);
  displayDailySteps();
}

function togglePages(pageOne, pageTwo) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
}