// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'

import {
    createDatabase,
    getChannelIds
} from "./db/database";
import { getInternalSubs } from "./utils/getInteralSubs";
import { initGetSubs } from './utils/getSubs';

console.log("JSALStats Twitter Bot Running");

console.log("Checking database...");
createDatabase()

console.log('\nAll channel IDs:')
console.log('Studio Channel IDs:', await getChannelIds(true));
console.log('Non Studio Channel IDs:', await getChannelIds(false));

console.log("\nUpdating internal subs")
console.log(await getInternalSubs())

console.log('\nInitalizing getSubs.ts')
await initGetSubs()

console.log('Time to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');
