import readFile from "readline";

const rl = readFile.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task..");
    console.log("2: View Your Task..");
    console.log("3: Exit..\n");
    rl.question("Choose an Option form given Menu: ", handleInput)
}

const handleInput = (Option) => {
    if (Option === "1") {
        rl.question("Enter the task: ", (task) => {
            todos.push(task);
            console.log("Task Added: ", task);
            showMenu()
        })
    }

    else if (Option === "2") {
        console.log("\n Your Todo Lists");
        todos.forEach((task, index) => {
            console.log(` ${index + 1}. ${task}`);
        })
        showMenu()
    }
    else if (Option === "3") {
        console.log("Good Byee..");
        rl.close();
    }
    else {
        console.log("Invlid Option. Please Try Again..");
        showMenu();
    }
}

// Show menu
showMenu();
