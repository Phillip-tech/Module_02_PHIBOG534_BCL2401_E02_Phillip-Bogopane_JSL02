
// Function to add an item to a list
const addToList = (inputId, errorMessage, listId) => {
    const input = document.querySelector(inputId).value.trim();
    if (!input) {
        alert(errorMessage);
        return false;
    }
    const list = document.querySelector(listId);
    for (const item of list.querySelectorAll('li')) {
        if (item.textContent.trim() === input) {
            alert('Already exists!');
            return false;
        }
    }
    const newItem = document.createElement('li');
    newItem.textContent = input;
    list.appendChild(newItem);
};

// Display welcome message with the current date
document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${new Date().toDateString()}`;

// Event listeners for adding workouts and goals to lists
document.querySelector('#submitWorkout').addEventListener('click', () => addToList('#workoutInput', 'Please enter a valid workout.', '#workoutList'));
document.querySelector('#submitGoal').addEventListener('click', () => addToList('#goalInput', 'Please enter a valid goal.', '#goalList'));

// Functions to update water intake and display it
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => { waterIntake > 0 && updateWaterIntake(-1) });

// Function to update progress charts
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

// Initial update of progress charts
updateProgressCharts();

// Function to toggle dark theme
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

// Event listener for toggling theme
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to handle form submission for meal plan
const submitMealPlan = (event) => {
    event.preventDefault();
    alert('Meal plan submitted successfully! 🍴');
};

// Event listener for submitting meal plan form
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);