const app = require('express')()
const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(9999, '0.0.0.0')