import https from "https";
import readline from 'readline';
import chalk from "chalk";
import { log } from "console";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const url = 'https://v6.exchangerate-api.com/v6/5025db464b93bb719576af71/latest/USD';

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        try {
            const rates = JSON.parse(data).conversion_rates;
            rl.question('Enter the amount in USD: ', (amount) => {
                rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
                    const rate = rates[currency.toUpperCase()];
                    if (rate) {
                        log(chalk.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                    } else {
                        log('Invalid Currency Code.');
                    }
                    rl.close();
                });
            });
        } catch (error) {
            log('Error parsing JSON:', error.message);
        }
    });

    response.on('error', (error) => {
        log('Error with the request:', error.message);
    });
});
