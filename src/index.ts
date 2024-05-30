// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'

// If it passes validation, run the main script
import {
    getChannelIds,
} from "./db/database";
import { getSubsTask } from './utils/getSubs';
import { CronJob } from 'cron';

console.log("JSALStats Twitter Bot Running");

console.log('All Channel IDs:', await getChannelIds());

await getSubsTask()

console.log('\nTime to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');

// Start the cron job
console.log('Starting the cron job!')
const getSubsJob = new CronJob('*/2 * * * * *', getSubsTask)
getSubsJob.start()