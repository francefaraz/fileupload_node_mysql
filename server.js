const express = require('express')
const app = express()


const userRoutes=require('./routes/user.routes')
const cors = require('cors');


// Middleware Connections
app.use(cors())
app.use(express.json())

app.use('/api',userRoutes)
// Routes

app.get('/', (req, res) => res.send('Hello World!'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})