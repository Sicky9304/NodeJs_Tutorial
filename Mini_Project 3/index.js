import { log } from 'console';
import https from "https";
import chalk from "chalk";

const getJoke = () => {
    const url = 'https://hindi-jokes-api.onrender.com/jokes?api_key=ccbfa073ae8b4cb2b2ff3c31fd80';

    https.get(url, { headers: { 'Accept-Charset': 'utf-8' } }, (response) => {
        response.setEncoding('utf8'); // Ensures the response is treated as UTF-8
        let data = "";

        // Collecting data chunks
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Handling the end of the response
        response.on('end', () => {
            try {
                // Parsing the joke data
                const joke = JSON.parse(data);

                // Displaying the joke content
                if (joke && joke.jokeContent) {
                    log(chalk.bgRed('Here is a random joke:'));
                    log(chalk.yellow(joke.jokeContent));
                } else {
                    log(chalk.red('No joke content available in the response.'));
                }
            } catch (err) {
                // Handling JSON parsing errors
                log(chalk.red('Error parsing the joke response!'));
            }
        });

        // Handling response errors
        response.on('error', (err) => {
            log(chalk.red(`Error fetching the joke: ${err.message}`));
        });
    }).on('error', (err) => {
        log(chalk.red(`HTTP Request Failed: ${err.message}`));
    });
};

// Call the function to get a joke
getJoke();



