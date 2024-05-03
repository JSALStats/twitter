import {
    createDatabase,
    getChannelIds
} from "./db/database";

console.log("JSALStats Twitter Bot Running");

console.log("Checking database...");
createDatabase()

console.log('\nAll channel IDs:')
console.log('Studio Channel IDs:', await getChannelIds(true));
console.log('Non Studio Channel IDs:', await getChannelIds(false));
