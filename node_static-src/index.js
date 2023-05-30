var exp = require('express');

 var app = exp();

app.use(exp.static(__dirname+'/public'));
app.get('/getmethod', function(req,res){
    res.send(console.log("get is called"));
})

app.listen(3000);