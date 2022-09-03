//imported dependencies
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')


const express = require('express')
const connectDb = require('./db/connect')
const productRouter = require('./routes/routes')
const app = express()


//middleware
app.use(express.json())
app.use(cors({origin: '*'}));


//routes
app.use('/api/v1/products', productRouter)



app.use(notFound)
app.use(errorHandler)


//port 
const PORT = process.env.PORT || 3000


const start = async() =>{
    try {
        await connectDb(process.env.MONGO_URI);
        console.log('database connected');
        app.listen(PORT, console.log(`server is running on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start();