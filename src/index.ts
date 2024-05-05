// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'

import {
    createDatabase,
    getChannelIds,
    getChannelSubs
} from "./db/database";
import { getSubsTask } from './utils/getSubs';
import { sendDiscordMessage } from './utils/sendDiscordMessage';

console.log("JSALStats Twitter Bot Running");

console.log("Checking database...");
await createDatabase()

console.log('All Channel IDs:', await getChannelIds());

console.log('\Updating non-internal subscriber counts!')
await getSubsTask()

console.log('\nTest sub count from db')
const test = await getChannelSubs('UCBCuUUPr6Lo8RmmhVFySoiQ')
console.log(test)

// console.log('\nSending test message to Discord webhook!')
// await sendDiscordMessage('Test')

console.log('Time to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');
