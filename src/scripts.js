// summary page
const userName = document.querySelector('.greeting');
const summaryPage = document.querySelector('.summary-view-js');
const calendar = document.querySelector('#calendar');
const hydrationImg = document.querySelector('#hydration-image');
const summaryHydrationData = document.querySelector('.hydration-data-js');
const sleepImg = document.querySelector('#sleep-image');
const summarySleepData = document.querySelector('.sleep-data-js');
const stepGoalComparison = document.querySelector('.activity-data-js');

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
const activityImgDetailed = document.querySelector('#activity-image-detailed');
const dailySteps = document.querySelector('.daily-steps');
const goalReached = document.querySelector('.goal-reached');
const minActive = document.querySelector('.min-active');
const flightOfStairs = document.querySelector('.flight-of-stairs');
const mileageWalked = document.querySelector('.mile-walk');
const weeklySteps = document.querySelector('.weekly-steps');
const weeklyStairs = document.querySelector('.weekly-stairs');
const weeklyMinsActive = document.querySelector('.weekly-mins-active');


const allUsers = new UserRepository(userData);
const user = new User(allUsers.getUser(getRandomIndex(allUsers.usersData)));
const hydrationStats = new Hydration(hydrationData);
const sleepStats = new Sleep(sleepData);
const activityStats = new Activity(activityData, userData);
const activityRepoStats = new ActivityRepository(activityData);
let date = '2019/06/15'

window.addEventListener('load', displaySummaryData);
calendar.addEventListener('change', resetData);
hydrationImg.addEventListener('click', displayHydrationPage);
hydrationImgDetailed.addEventListener('click', displayHydrationPage);
sleepImg.addEventListener('click', displaySleepPage);
sleepImgDetailed.addEventListener('click', displaySleepPage);
activityImg.addEventListener('click', displayActivityPage);
activityImgDetailed.addEventListener('click', displayActivityPage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySummaryData() {
  greetUser();
  getUserSummaryData();
}

function greetUser() {
  userName.innerText = `Welcome, ${user.returnFirstName()}!`;
}

function getUserSummaryData() {
  summaryHydrationData.innerText = `${hydrationStats.findDailyIntake(date, user.id)}`;
  summarySleepData.innerText = `${sleepStats.findDailyHrsSlept(date, user.id)}`;
  stepGoalComparison.innerText = ` Your step goal is: ${user.dailyStepGoal}. Across all users the average step goal is: ${allUsers.calculateAvgStepGoal()}.`;
}

function resetData() {
  getDate();
  getUserSummaryData();
  getHydrationPageData();
  getSleepPageData();
  getActivityPageData();
}

function displayHydrationPage() {
  togglePages(summaryPage, hydrationPage);
  getHydrationPageData();
}

function getHydrationPageData() {
  detailedHydrationData.innerText = `${hydrationStats.findDailyIntake(date, user.id)}`;
  avgHydrationIntakeData.innerText = `${hydrationStats.calculateDailyAvgIntake(user.id)} oz`;
  getWeeklyData(weeklyHydrationData, hydrationStats.getWeeklyIntake(date, user.id));
}

function displaySleepPage() {
  togglePages(summaryPage, sleepPage);
  getSleepPageData();
}

function getSleepPageData() {
  dayHoursSlept.innerText = `${sleepStats.findDailyHrsSlept(date, user.id)}`;
  daySleepQuality.innerText = `${sleepStats.findDailySleepQuality(date, user.id)}`;
  allTimeHoursSlept.innerText = `${sleepStats.calculateDailyAvgHoursSlept(user.id)}`;
  allTimeSleepQuality.innerText = `${sleepStats.calculateDailyAvgSleepQuality(user.id)}`;
  getWeeklyData(weeklyHoursSlept, sleepStats.calculateWeeklyHrsSlept(date, user.id));
}

function displayActivityPage() {
  togglePages(summaryPage, activityPage);
  getActivityPageData();
}

function getActivityPageData() {
  getDailyActivityPageData();
  getWeeklyActivityPageData();
}

function getDailyActivityPageData() {
  dailySteps.innerText = `You: ${activityStats.findDailySteps(date, user.id)}
  All Users Avg: ${activityRepoStats.getAvgStepsForAllUsers(date)}`;
  goalReached.innerText = `${activityStats.giveFeedback(date, user.id)}`;
  minActive.innerText = `You: ${activityStats.getActiveMins(date, user.id)}
  All Users Avg: ${activityRepoStats.getAvgMinActiveForAllUsers(date)}`;
  flightOfStairs.innerText = `You: ${activityStats.findDailyFlightOfStairs(date, user.id)}
  All Users Avg: ${activityRepoStats.getAvgStairsClimbedForAllUsers(date)}`;
  mileageWalked.innerText = `${activityStats.calculateMiles(date, user.id)}`
}

function getWeeklyActivityPageData() {
  getWeeklyData(weeklySteps, activityStats.getWeeklySteps(date, user.id));
  getWeeklyData(weeklyStairs, activityStats.getWeeklyflightsOfStairs(date, user.id));
  getWeeklyData(weeklyMinsActive, activityStats.getWeeklyMinutesActive(date, user.id));
}

function getWeeklyData(selector, weekly) {
  selector.innerHTML = weekly.map(day => {
    return `<div>${day}</div>`

  }).join('');
}

function getDate() {
  const newDate = calendar.value;
  let dataDate = newDate.replace('-', '/');
  dataDate = dataDate.replace('-', '/');
  return date = dataDate;
}

function togglePages(pageOne, pageTwo) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
}