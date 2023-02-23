const express = require('express') // อ้างอิงไปยัง module express
const app = express()

app.use(express.json())

//route , http method post get put patch ...
// get มี 2 แบบ : params , query
// แบบ params
// ฝั่ง request ส่ง thanakorn เข้ามาโดยเส้นทางดังนี้
    // localhost:3000/say/thanakorn .


// app.get('/say/:name/:age', function (req, res) {
//   res.send(`Hello ${req.params.name} , ${req.params.age}`)
// })

// แบบ : query
// localhost:3000/search?name=macbook&price=9999

// app.get('/search', function (req, res) {
//   res.send(`search : ${req.query.name} , ${req.query.price}`)
// })



const port = 3000
app.listen(port , () => {
    console.log(`Listen on port : ${port}`);
    console.log("Press Ctrl + C to quit");
}) // ทำการ start เซิฟเวอร์