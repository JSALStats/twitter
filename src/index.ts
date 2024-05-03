import { createDatabase } from "./db/database";
import * as path from 'path'

console.log("JSALStats Twitter Bot Running");

console.log("Checking database...");
createDatabase(
    path.resolve(__dirname, './db/data.db'),
    path.resolve(__dirname, './db/sql/createDatabase.sql'),
)