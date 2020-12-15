// summary page
const userName = document.querySelector('.greeting');
const summaryPage = document.querySelector('.summary-view-js');
const calendar = document.querySelector('#calendar');
const hydrationImg = document.querySelector('#hydration-image');
const summaryHydrationData = document.querySelector('.hydration-data-js');
const sleepImg = document.querySelector('#sleep-image');
const summarySleepData = document.querySelector('.sleep-data-js');
const stepGoalComparison = document.querySelector('.step-goal-comparison');

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
const summaryActivityData = document.querySelector('.activity-data-js');


const allUser = new UserRepository(userData);
const user = new User(allUser.getUser(12));
const hydrationStats = new Hydration(hydrationData);
const allSleepStats = new SleepRepo(sleepData);
const sleepStats = new Sleep(sleepData);
let date = '2019/06/15'

window.addEventListener('load', displaySummaryData);
calendar.addEventListener('change', resetData);
hydrationImg.addEventListener('click', displayHydrationPage);
hydrationImgDetailed.addEventListener('click', displayHydrationPage);
sleepImg.addEventListener('click', displaySleepPage);
sleepImgDetailed.addEventListener('click', displaySleepPage);

function displaySummaryData() {
  greetUser();
  getDate();
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
  summaryHydrationData.innerText = `${hydrationStats.findDailyIntake(date, 12)}`;
  summarySleepData.innerText = `${sleepStats.findDailyHrsSlept(date, 12)}`
  // summaryActivityData.innerText = `${}`
}

function displayHydrationPage() {
  togglePages(summaryPage, hydrationPage);
  displayDailyIntake();
  displayWeeklyIntake();
  displayAvgIntake();
}

function displayDailyIntake() {
  detailedHydrationData.innerText = `${hydrationStats.findDailyIntake(date, 12)}`;
}

function displayWeeklyIntake() {
  getWeeklyData(weeklyHydrationData, hydrationStats.getWeeklyIntake(date, 12));
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
  dayHoursSlept.innerText = `${sleepStats.findDailyHrsSlept(date, 12)}`;
  daySleepQuality.innerText = `${sleepStats.findDailySleepQuality(date, 12)}`;
  getWeeklyData(weeklyHoursSlept, sleepStats.calculateWeeklyHrsSlept(date, 12));
  allTimeHoursSlept.innerText = `${sleepStats.calculateDailyAvgHoursSlept(12)}`;
  allTimeSleepQuality.innerText = `${sleepStats.calculateDailyAvgSleepQuality(12)}`;
}

function resetSleepPage() {
  dayHoursSlept.innerText = `${sleepStats.findDailyHrsSlept(date, 12)}`;
  daySleepQuality.innerText = `${sleepStats.findDailySleepQuality(date, 12)}`;
  getWeeklyData(weeklyHoursSlept, sleepStats.calculateWeeklyHrsSlept(date, 12));
  allTimeHoursSlept.innerText = `${sleepStats.calculateDailyAvgHoursSlept(12)}`;
  allTimeSleepQuality.innerText = `${sleepStats.calculateDailyAvgSleepQuality(12)}`;
}

function getDate() {
  const newDate = calendar.value;
  let dataDate = newDate.replace('-', '/');
  dataDate = dataDate.replace('-', '/');
  console.log(dataDate);
  date = dataDate;
}

function resetData() {
  displaySummaryData();
  resetHydrationPage();
  resetSleepPage();
  // displayHydrationPage();
  // displaySleepPage();
  //close, but toggling occurs soooo
  //create another function that doesn't have toggle pages?
}

function getWeeklyData(selector, method) {
  selector.innerHTML = `
<span>${method[0]}</span>
<span>${method[1]}</span>
<span>${method[2]}</span>
<span>${method[3]}</span>
<span>${method[4]}</span>
<span>${method[5]}</span>
<span>${method[6]}</span>
`;
}

function togglePages(pageOne, pageTwo) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
}