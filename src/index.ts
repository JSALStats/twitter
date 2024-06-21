// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'

// If it passes validation, run the main script
import {
    getChannelIds,
} from "./db/database";
import { getSubsTask } from './utils/getSubs';

console.log("JSALStats Twitter Bot Running");

console.log('All Channel IDs:', await getChannelIds());

await getSubsTask()

console.log('\nTime to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');
console.log('Starting the cron job!')

// Run the task every 2 seconds
setInterval(getSubsTask, 2000)

// Force the garbage collector to run every hour
setInterval(() => {
	Bun.gc(false)
}, 1000 * 60 * 60)