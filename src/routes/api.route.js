/** api.route.js
 * This file contains all the routes for query the api
 */

import * as controller from '../controllers/api.controller.js';
import { Router } from 'express';
const router = Router();

/* GET Devices List */
router.get('/devices', controller.getDevices);

/* GET Device by ID */
router.get('/devices/id/:id', controller.getDevicesById);

/* GET Device by DEVEIU */
router.get('/devices/deveui/:deveui', controller.getDevicesByDeveui);



export default router;