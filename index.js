import router from './src/routes/api.route.js';
import express from 'express'

const app = express()
const port = 3000

app.use('/api', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})