var express = require("express")
var app = express()

app.get('/:time',function(req, res){
    var time = req.params.time
    res.send(time);
})
app.listen(process.env.PORT)