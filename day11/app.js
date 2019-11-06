var express = require('express')
var app = express()
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'k0omueangmsql',
    database: 'boatrental'
})

db.connect()

//read
//--------------------------------------------------------------
app.get('/boat', function (req, res) {
    let query = `SELECT * FROM boats`
    db.query(query, function (err, results) {
        res.json(results)
    })
})

app.get('/sailors', function (req, res) {
    let query = `SELECT * FROM sailors`
    db.query(query, function (err, results) {
        res.json(results)
    })
})

app.get('/reserves', function (req, res) {
    let query = `SELECT * FROM reserves`
    db.query(query, function (err, results) {
        res.json(results)
    })
})


//add
//--------------------------------------------------------------
app.get('/addboat', function (req, res) {
    let query = `INSERT INTO boats(bid,bname,color) values (${req.query.bid},"${req.query.bname}","${req.query.color},")`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})

app.get('/addsailors', function (req, res) {
    let query = `INSERT INTO sailors(sid,sname,rating, age) values (${req.query.sid},"${req.query.sname}",${req.query.rating},${req.query.age})`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})

app.get('/addreserves', function (req, res) {

    let query = `INSERT INTO reserves(sid, bid, day) values (${req.query.sid},${req.query.bid},"${req.query.day},")`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})


//delete
//--------------------------------------------------------------
app.get('/deleteboat', function (req, res) {
    let query = `DELETE FROM boats WHERE bid = ${req.query.bid}`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }
    })
})

app.get('/deletesailors', function (req, res) {
    let query = `DELETE FROM sailors WHERE sid = ${req.query.sid}`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }
    })
})

app.get('/deletereserves', function (req, res) {
    let query = `DELETE FROM reserves WHERE sid = ${req.query.sid} and bid = ${req.query.bid} `
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }
    })
})



//update
//--------------------------------------------------------------

app.get('/updateboat', function (req, res) {
    let query = `UPDATE boats SET bname = "${req.query.name}", color="${req.query.color}" WHERE bid = ${req.query.bid}`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})

app.get('/updatesailors', function (req, res) {
    let query = `UPDATE sailors SET sname = "${req.query.name}", rating=${req.query.rating}, age=${req.query.age} WHERE sid = ${req.query.sid}`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})

app.get('/updatereserves', function (req, res) {
    let query = `UPDATE reserves SET day = "${req.query.day}" WHERE sid = ${req.query.sid} and bid = ${req.query.bid}`
    db.query(query, function (err, results) {
        if (err) {
            console.log("something wrong")
            res.send(err.message)
        } else {
            res.send("sucess")
            //res.json(results)
        }

    })
})

app.listen(3001, () => {
    console.log("connect DB port 3001")
})