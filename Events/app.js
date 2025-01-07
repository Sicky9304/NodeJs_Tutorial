// Import EventEmitter class
const EventEmitter = require("events");
// Create an instance of EventEmitter
const emitter = new EventEmitter();

// // 1. Define an event listener (addListener)
// emitter.on("greet",()=>{
//     console.log("Hello Alex! Whats's Up..");
// });

// // 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//* You can also pass arguments while emitting.

// // 1. Define an event listener (addListener)
// emitter.on("greet",(username)=> {
//     console.log(`Hello ${username} What's Up Dude..`);
// });

// //2. Trigger (emit) the "greet" event..
// emitter.emit("greet","Alex!");


//! But it's best to take a single argument as an object..

emitter.on("greet",(arg) => {
    console.log(`Hello ${arg.username}, You ara a ${arg.prof} right!`)
});

emitter.emit("greet",{username: "Alex!",prof: "Full stack developer.."});
