//Function to display a welcome message with the current date
const displayWelcomeMessage = () => {
   const today = new Date().toDateString();
   document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
displayWelcomeMessage();

// Function to add a new workout routine to the list
const addWorkoutRoutine = () => {
   const workoutInput = document.querySelector('#workoutInput').value.trim();
   if (!workoutInput) {
       alert('Please enter a valid workout.');
       return;
   }
   const workoutList = document.querySelector('#workoutList');
   const newWorkout = document.createElement('li');
   newWorkout.textContent = workoutInput;
   workoutList.appendChild(newWorkout);
};

// Event listener for the workout submit button
document.querySelector('#submitWorkout').addEventListener('click', addWorkoutRoutine);

// Function to add a new fitness goal to the list
const addNewGoal = () => {
   const goalInput = document.querySelector('#goalInput').value.trim();
   if (!goalInput) {
       alert('Please enter a valid goal.');
       return;
   }
   const goalList = document.querySelector('#goalList');
   // Check for duplicates before adding the goal
   const existingGoals = goalList.querySelectorAll('li');
   for (const existingGoal of existingGoals) {
       if (existingGoal.textContent.trim() === goalInput) {
           alert('Goal already exists!');
           return;
       }
   }
   const newGoal = document.createElement('li');
   newGoal.textContent = goalInput;
   goalList.appendChild(newGoal);
};

// Event listener for the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Function to update the water intake display
let waterIntake = 0;
const updateWaterIntake = (change) => {
   waterIntake += change;
   document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => {
   if (waterIntake > 0) {
       updateWaterIntake(-1);
   }
});

// Function to update the progress charts display
const updateProgressCharts = () => {
   // Implement progress chart logic here (e.g., using Chart.js or D3.js)
   document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
   document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Function to toggle the theme (dark/light mode)
const toggleTheme = () => {
   document.body.classList.toggle('dark-theme');
};

// Event listener for the theme toggle button
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to handle the submission of the meal plan form
const submitMealPlan = (event) => {
   event.preventDefault();
   // Implement submission logic here (e.g., sending data to a server)
   alert('Meal plan submitted successfully! 🍴');
};

// Event listener for the meal plan form submission
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
