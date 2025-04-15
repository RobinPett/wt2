import express from 'express'
import { router } from './routes/router.js'

const app = express()

app.use('/', router)

// Error handling
app.use((error, req, res, next) => {
  console.error(error)
  console.error('Error handler: ')
  console.error('Caught error message: ' + error.message)
  console.error(error.status)

  res
    .status(error.status || 500)
    .json({
      status: error.status,
      message: error.message
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
