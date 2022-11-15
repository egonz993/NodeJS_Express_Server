/** api.service.js
 * This file contains the database interface
 */

import { createConnection } from 'mysql';

const host = "telemetrikbd.cjxqpv0cmtep.us-west-2.rds.amazonaws.com"
const database = "alcaldia_med"
const user = "Telelamp"
const password = "t3l3m3tr1k"

let connection = createConnection({
    host,
    user,
    password,
    database
});


/** SQL_query
 * 
 * @param {String} query string to query to database
 * @param {Function} callback contains the response in params
 */
export function SQL_query(query, callback) {
    try {
        connection.connect(error => {
            if (error) throw error;
            else {
                connection.query(query, (error, response) => {
                    if (error) throw error;
                    callback(response);
                    connection.end()
                });
            }
        });
    } catch (err) {
        console.error(err.message);
        next(err);
    }
}