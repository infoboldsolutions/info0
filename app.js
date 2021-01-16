const app = require('express')()
const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')
const cors = require('cors')

app.use(cors())

app.use('/users', userRouter)
app.use('/posts', postsRouter)

app.listen(9999, '0.0.0.0')
