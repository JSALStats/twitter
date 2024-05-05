// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'

import {
    createDatabase,
    getChannelIds
} from "./db/database";
import { getInternalSubs } from "./utils/getInteralSubs";
import { getSubsTask } from './utils/getSubs';
import { sendDiscordMessage } from './utils/sendDiscordMessage';

console.log("JSALStats Twitter Bot Running");

console.log("Checking database...");
createDatabase()

console.log('\nAll channel IDs:')
console.log('Studio Channel IDs:', await getChannelIds(true));
console.log('Non Studio Channel IDs:', await getChannelIds(false));

console.log("\nUpdating internal subscriber counts!")
console.log(await getInternalSubs())

console.log('\Updating non-internal subscriber counts!')
await getSubsTask()

// console.log('\nSending test message to Discord webhook!')
// await sendDiscordMessage('Test')

console.log('Time to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');
