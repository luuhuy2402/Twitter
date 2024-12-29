import express from 'express'
import usersrouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'

// app handlers
const app = express()
const port = 3000

databaseService.connect()

app.use(express.json())
app.use('/users', usersrouter)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
