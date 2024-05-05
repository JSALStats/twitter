// Import the required modules
import * as fs from 'fs';
import { Database } from 'bun:sqlite'; // No longer using sqlite3
import * as path from 'path';

// Define the database file path
const databaseFile = path.resolve(__dirname, './data.db');
const createDatabaseSQLFile = path.resolve(__dirname, './sql/createDatabase.sql');

// Create an async function to initialize the database
export async function createDatabase(): Promise<void> {
    if (fs.existsSync(databaseFile)) return;
    try {
        // Open the SQLite database
        const db = new Database(databaseFile);

        // Read the SQL commands from createDatabase.sql file
        const sqlCommands = fs.readFileSync(createDatabaseSQLFile, 'utf8');

        // Execute the SQL commands to create the database schema
        await db.exec(sqlCommands);

        console.log('Database created successfully.');
    } catch (error) {
        console.error('Error creating database:', error);
    }
}

export function updateSubscriberCount(channelId: string, subsciberCount: number): void {
    const time = new Date().getTime()
    // Update the values in the overview table
    // Add to history
}

export async function getChannelIds(): Promise<string[]> {
    try {
        // Open the SQLite database
        const db = new Database(databaseFile);

        // SQL statement to retrieve channel IDs
        const sql = 'SELECT channel_id FROM overview';

        // Execute the query
        const rows = db.query(sql).values() as any;
        
        // Converts the response from the database into a one-dimensional array
        return rows.flatMap((channelIds: any) => channelIds);
    } catch (error) {
        console.error('Error fetching channel IDs:', error);
        return [];
    }
}

export async function getChannelSubs(channelId: string): Promise<[number, string] | null> {
    try {
        // Open the SQLite database
        const db = new Database(databaseFile);

        // SQL statement to retrieve subscriber count and time reached
        const sql = `SELECT subscriber_count, subscriber_count_hit_time FROM overview WHERE channel_id = $channelId`;

        // Execute the query
        const row = db.query(sql).values({ $channelId: channelId}) as any;
        
        // If row is null, the channel ID doesn't exist in the table
        if (!row) {
            return null;
        }

        return row.flatMap((response: any) => response);
    } catch (error) {
        console.error('Error fetching channel subs:', error);
        return null;
    }
}
