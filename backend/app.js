require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000

//db
const { dbConnection } = require("./db/server")
const userActiveData = require("./user-activity-json.json")
dbConnection()

const user = require("./routes/User")

app.use(cors())
app.use(express.json())
app.use("/user", user)

app.get('/activeuser', (req, res) => {
    let activeuserData = []
    for (let hour = 0; hour <= 24; hour++) {
        const date = new Date();
        date.setHours(hour);
        date.setMinutes(0);
        date.setSeconds(0);
        userActiveData.map((item) => {
            const today = new Date()
            const endday = new Date(item.timestamp)

        })
        // Add 1 hour to the current hour
        date.setHours(date.getHours() + 1);

        // Calculate the range based on the current hour
        const startHour = Math.floor(date.getHours()); // Floor the current hour value
        const endHour = startHour + 1;

        const hourRange = `${startHour}-${endHour}`;
        activeuserData.push({ hour: hourRange })
    }
    console.log(activeuserData);

    res.send(activeuserData)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
