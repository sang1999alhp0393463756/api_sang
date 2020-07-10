var express = require('express')
var app = express()
var path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.get('/demo', function (req, res) {
 res.sendfile(path.join(__dirname,'./views/index.html'))
 
})
app.listen(8000)