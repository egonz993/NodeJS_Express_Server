/** api.controller.js
 * This File contains all callbacks for Routes specified on 'api.route.js'
 */

import { SQL_query } from "../services/api.service.js";

/* GET Devices List */
export function getDevices(req, res) {
    let query = `SELECT * From photocell_lora`
    SQL_query(query, (result) => {
        res.send(result)
    })
}

/* GET Device by ID */
export function getDevicesById(req, res) {
    let query = `SELECT * From photocell_lora WHERE id = ${req.params.id}`

    SQL_query(query, (result) => {
        res.send(result)
    })
}

/* GET Device by DEVEIU */
export function getDevicesByDeveui(req, res) {
    let query = `SELECT * From photocell_lora WHERE identifier_str = '${req.params.deveui}'`

    SQL_query(query, (result) => {
        res.send(result)
    })
}