//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.


const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");
const emitter = new EventEmitter();
const filePath = path.join(__dirname, "eventCounts.json");

// Function to load event counts from a file
const loadEventCounts = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    }
    return {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "profile-update": 0,
    };
};
// Function to save event counts to a file
const saveEventCounts = (counts) => {
    fs.writeFileSync(filePath, JSON.stringify(counts, null, 2), "utf8");
};

// Initialize event counts
const EventsCount = loadEventCounts();

// Event listeners
emitter.on("user-login", (username) => {
    EventsCount["user-login"]++;
    console.log(`${username} Logged in Successfully..\n`);
    saveEventCounts(EventsCount);

})

emitter.on("user-purchase", (arg) => {
    EventsCount["user-purchase"]++;
    console.log(`Hello ${arg.username} Thank you for purchasing the ${arg.product}.. Visit Again..`);
    saveEventCounts(EventsCount);

})

emitter.on("profile-update", (arg) => {
    EventsCount["profile-update"]++;
    console.log(`Hello ${arg.username}, Your ${arg.update} was updated Successfully..`);
    saveEventCounts(EventsCount);

});

emitter.on("user-logout", (username) => {
    EventsCount["user-logout"]++;
    console.log(`\n${username} Logged out Successfully..`);
    saveEventCounts(EventsCount);

})


// Emit 'summary' event
emitter.on("summary", () => {
    console.log("\nEvent Summary:");
    for (const [event, count] of Object.entries(EventsCount)) {
        console.log(`${event}: ${count}`);
    }
});

emitter.emit("user-login", "Alex");
emitter.emit("user-purchase", { username: "Alex", product: "Leptop" });
emitter.emit("profile-update", { username: "Alex", update: "Email" });
emitter.emit("user-logout", "Alex");


//Summery
emitter.emit("summary");

