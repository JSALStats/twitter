// Validate environment variables firstly
const performanceStart = performance.now()
import './validators/env'
import {
    getChannelIds,
} from "./db/database";
import { getSubsTask } from './utils/getSubs';

console.log("JSALStats Twitter Bot Running");

console.log('All Channel IDs:', await getChannelIds());

console.log('\nUpdating subscriber counts!')
await getSubsTask()

console.log('\nTime to initialize:', (performance.now() - performanceStart).toFixed(2), 'milliseconds');
