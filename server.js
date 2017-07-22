var express = require("express")
var app = express()
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:time',function(req, res){
    var time = req.params.time;
    if(time.split(",").length == 1){
        var timeParser = new Date(time*1000);
        res.send(JSON.stringify({
            unix : time,
            natural : months[timeParser.getMonth()]+" "+timeParser.getDate()+", "+timeParser.getFullYear()
        }))
    }
    else{
        var timeParser = (new Date(time).getTime()/1000).toString();
        res.send(JSON.stringify({
            unix : timeParser,
            natural : time
        }))        
    }
})
app.listen(process.env.PORT)