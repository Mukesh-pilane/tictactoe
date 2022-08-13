const express = require('express')
const app = express()
const http = require('http').createServer(app)


app.use('/static', express.static('public'))
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("play")
})

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
