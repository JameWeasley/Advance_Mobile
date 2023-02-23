const express = require('express')
const app = express()
const cors = require('cors');

const corsOption = {
    origin: ['http://example.com', 
            'http://localhost:4200',
            'http://www.3schools.com'],
    optionSuccessStatus: 200 
}

app.use(cors(corsOption))

app.use('/image', express.static('./images '))

app.use(express.json())

app.use(require('./src/routes/routes'))

const port = 3000

app.listen(port , () => {
    console.log(`Listen on port : ${port}`);
    console.log("Press Ctrl + C to quit");
}) 