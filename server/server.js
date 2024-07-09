require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

const PORT = process.env.PORT || 5000


app.get('/test', (req, res) => {
    res.send('test route')
})

// Enable CORS for all origins
app.use(cors())
app.use(express.json())
app.use('/', indexRouter)

mongoose.connect("mongodb+srv://dileepkumar30827:Mulagada%233@cluster0.th8hl8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Database connection successfull'))
.catch((err) => console.log('error in db connection', err));


app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })