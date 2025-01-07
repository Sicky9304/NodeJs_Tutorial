import { log } from "console";
import readline from "readline";
import fs from "fs";

// File path to store tasks
const FILE_PATH = "todos.json";

// Initialize the tasks array
let todos = [];

// Load tasks from the file if it exists
const loadTasks = () => {
    try {
        if (fs.existsSync(FILE_PATH)) {
            const data = fs.readFileSync(FILE_PATH, "utf8");
            todos = JSON.parse(data);
        }
    } catch (error) {
        log("Error loading tasks:", error.message);
    }
};

// Save tasks to the file
const saveTasks = () => {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), "utf8");
    } catch (error) {
        log("Error saving tasks:", error.message);
    }
};

// Readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Show menu options
const showMenu = () => {
    log("Welcome to ToDo list Program")
    log("1: Add a Task");
    log("2: View Your Tasks");
    log("3: Exit\n");
    rl.question("Choose an Option: ", handleInput);
};

// Add a task
const addTask = () => {
    rl.question("Enter the task: ", (task) => {
        if (task.trim()) {
            todos.push(task.trim());
            log("Task Added:", task);
            saveTasks(); // Save tasks after adding
        } else {
            log("Task cannot be empty.\n");
        }
        showMenu();
    });
};

// View tasks
const viewTasks = () => {
    if (todos.length === 0) {
        log("\nNo tasks found.\n");
    } else {
        log("\nYour Todo List:");
        todos.forEach((task, index) => log(` ${index + 1}. ${task}`));
    }
    showMenu();
};

// Handle user input
const handleInput = (option) => {
    switch (option.trim()) {
        case "1":
            addTask();
            break;
        case "2":
            viewTasks();
            break;
        case "3":
            log("Goodbye!");
            rl.close();
            break;
        default:
            log("Invalid Option. Please Try Again.");
            showMenu();
    }
};

// Load tasks at the start
loadTasks();

// Show menu to the user
showMenu();
