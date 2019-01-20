var express = require('express');
var app = express();

app.listen(8080, () => {
    console.log("Server running on port 8080");
}),

app.get("/status", (req, res, next) =>{
    console.log("GET /status");
    res.json({"status": "ok"});
});

app.get("/users", (req, res, next) => {
    var id = req.param('id');
    if (typeof id === 'undefined'){
        console.log("GET /users ");
        res.json([{"id" : 1, "name" : "name1"},{"id" : 2, "name" : "name2"}]);
    }else {
        console.log("GET /users : " + id);
        res.json({"id" : id, "name" : "name"+id});
    }
});

app.get("/address", (req, res, next) => {
    var id = req.param('id');
    if (typeof id === 'undefined'){
        console.log("GET /address : " + id);
        res.json({"error":"error"});
    }else {
        console.log("GET /address : " + id);
        res.json({"id" : id, "address" : "address"+id});
    }
});

app.post("/test", (req, res, next) =>{
    console.log("POST /test : " + req);
    res.json({"status": "ok"});
});
