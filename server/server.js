const express = require('express');
const app = express();
const port = 3000;

//Serve static files from Piblic folder
app.use(express.static('public'))

//Define Route
app.get('/', (req, res) => {
    res.send('Hello, this is your local server!')
})

//start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})