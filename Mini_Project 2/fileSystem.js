import { log } from "console";
import readline from 'readline';
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Show menu options
const showMenu = () => {
    log("Welcome to File System Program")
    log("1: For Create a new File");
    log("2: For Append text in File");
    log("3: For Read the File")
    log("4: Exit\n");
    rl.question("Choose an Option: ", handleInput);
};


// Function for Create File..
const fileCreation = () => {
    rl.question(`Enter your fileNmae: `, (filename) => {
        rl.question(`Enter the content for your file: `, (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    log.error(`Error writing the file: ,${err.message}\n`);
                } else {
                    log(`File "${filename}.txt" Created Successfully..\n`);
                }
                showMenu();
            })
        })
    })
}

// Function for Append text in existing File..
const appendToFile = () => {
    rl.question(`Enter your fileNmae: `, (filename) => {
        rl.question(`Enter the content for your file: `, (content) => {
            fs.appendFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    log.error(`Error writing the file: ,${err.message}\n`);
                } else {
                    log(`In "${filename}.txt" text append Successfully..\n`);
                }
                showMenu();
            })
        })
    })
}

// Function for Read text from existing File..
const readFile = () => {
    rl.question(`Enter your fileName: `, (filename) => {
        fs.readFile(`${filename}.txt`, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading the file: ,${err.message}\n`);
            } else {
                log(data);
                log(`\nFile "${filename}.txt" Read Successfully..\n`);
            }
            showMenu();
        })
    })
}

// Handle user input
const handleInput = (option) => {
    switch (option.trim()) {
        case "1":
            fileCreation();
            break;
        case "2":
            appendToFile();
            break;
        case "3":
            readFile();
            break;
        case "4":
            log("Goodbye!");
            rl.close();
            break;
        default:
            log("Invalid Option. Please Try Again.");
            showMenu();
    }

};

showMenu();
