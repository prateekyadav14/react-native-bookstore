import cron from "cron";
import http from "http";

const job = new cron.CronJob("*/14 * * * *", function () {
    http
    .get(process.env.API_URL, (res) => {
        if (res.statusCode === 200) console.log("GET request  send successfully");
        else console.log("GET request failed", res.statusCode);
        })
        .on("error", (e) => console.error("Error while sending GET request:", e));
});

export default job;

// CRON JOB EXPPLANATION:
// This cron job is set to run every 14 minutes. It sends a GET request to the URL specified in the environment variable API_URL.
// If the request is successful (status code 200), it logs a success message; otherwise, it logs an error message with the status code.
// The job is exported for use in other parts of the application, allowing it to be started

// How to define a schedule for a cron job:
// The schedule is defined using the cron syntax: "*/14 * * * *" means  every 14 minutes.

