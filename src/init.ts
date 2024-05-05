// Initalising database. Done in a separate file to stop the program crashing in index.ts when you're creating the database :P
import { createDatabase } from "./db/database";

console.log("Checking database...");
await createDatabase()