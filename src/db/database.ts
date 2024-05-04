// Stores all the functionality for the database
import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';
import * as path from 'path'

const databaseFile = path.resolve(__dirname, './data.db')
const createDatabaseSQLFile = path.resolve(__dirname, './sql/createDatabase.sql')

export function createDatabase(): void {
    // Check if the database file exists
    if (!fs.existsSync(databaseFile)) {
        // Read the SQL commands from createDatabase.sql file
        fs.readFile(createDatabaseSQLFile, 'utf8', (err, sqlCommands) => {
            if (err) {
                console.error('Error reading SQL file:', err);
                return;
            }

            // Open SQLite database
            const db = new sqlite3.Database(databaseFile, (err) => {
                if (err) {
                    console.error('Error opening database:', err);
                    return;
                }

                // Execute the SQL commands to create the database schema
                db.exec(sqlCommands, (err) => {
                    if (err) {
                        console.error('Error executing SQL commands:', err);
                        return;
                    }

                    console.log('Database created successfully.');
                });

                // Close the database connection
                db.close((err) => {
                    if (err) {
                        console.error('Error closing database:', err);
                        return;
                    }
                });
            });
        });
    } else {
        console.log('Database already exists.');
    }
}

export function updateSubscriberCount(channelId: string, subsciberCount: number): void {
    const time = new Date().getTime()
    // Update the values in the overview table
    // Add to history
}

export function getChannelIds(wantsInternal: boolean): Promise<string[]> {
    return new Promise((resolve, reject) => {
        // Open SQLite database
        const db = new sqlite3.Database(databaseFile, sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                reject(err);
                return;
            }

            // SQL statement to run
            const sql = `SELECT channel_id FROM overview WHERE is_internal = ${wantsInternal ? 1 : 0}`;

            // Execute the query
            db.all(sql, [], (err, rows: any[]) => {
                if (err) {
                    reject(err);
                    return;
                }

                // Extract channel IDs from the result rows
                const channelIds = rows.map(row => row.channel_id);
                resolve(channelIds);
            });

            // Close the database connection
            db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err);
                }
            });
        });
    });
}

export function getChannelSubs(channelId: string): Promise<[number, string] | null> {
    return new Promise((resolve, reject) => {
        // Open SQLite database
        const db = new sqlite3.Database(databaseFile, sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                reject(err);
                return;
            }

            // SQL statement to run
            const sql = `SELECT subscriber_count, subscriber_count_hit_time 
                         FROM overview 
                         WHERE channel_id = ?`;

            // Execute the query
            db.get(sql, [channelId], (err, row: any) => {
                if (err) {
                    reject(err);
                    return;
                }

                // If row is null, the channel ID doesn't exist in the table
                if (!row) {
                    resolve(null);
                    return;
                }

                // Extract subscriber count and time reached from the row
                const subscriberCount = row.subscriber_count;
                const timeReached = row.subscriber_count_hit_time;

                // Resolve with subscriber count and time reached
                resolve([subscriberCount, timeReached]);
            });

            // Close the database connection
            db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err);
                }
            });
        });
    });
}