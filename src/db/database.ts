// Stores all the functionality for the database
import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';

export function createDatabase(databaseFile: string, createDatabaseSQLFile: string): void {
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
