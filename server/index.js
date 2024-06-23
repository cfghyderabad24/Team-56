const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin10:admin10@admin10.6lafpmt.mongodb.net/?retryWrites=true&w=majority&appName=admin10');
client.connect();

const db = client.db("skill");
const col = db.collection("user");
const col2 = db.collection("student");
const col3 = db.collection("view");
const col4 = db.collection("faculty");
const col5 = db.collection("vol");

app.get('/home', (req, res) => {
    res.send("It is a Home Page - New Page - New 2 Page");
});

app.post('/insert', async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    console.log(req.body);
    await col.insertOne(req.body);
    res.send("Data Received");
});

app.post('/check', async (req, res) => {
    console.log(req.body);
    var result = await col.findOne({ "name": req.body.un });
    if (result != null) {
        if (await bcrypt.compare(req.body.pw, result.password)) {
            res.send(result);
        } else {
            res.send("fail");
        }
    } else {
        res.send("fail");
    }
});

app.get('/show', async (req, res) => {
    var result = await col.find().toArray();
    console.log(result);
    res.send(result);
});

app.post('/entry', (req, res) => {
    console.log(req.body);
    col2.insertOne(req.body);
    res.send("Successfully Inserted");
});

app.post('/ent', (req, res) => {
    console.log(req.body);
    col3.insertOne(req.body);
    res.send("Successfully Inserted");
});

app.post('/fac', (req, res) => {
    console.log(req.body);
    col4.insertOne(req.body);
    res.send("Successfully Inserted");
});

app.post('/vol', (req, res) => {
    console.log(req.body);
    col5.insertOne(req.body);
    res.send("Successfully Inserted");
});

app.put('/entry', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            sname: req.body.sname,
            pstatus: req.body.pstatus,
            scompany: req.body.scompany,
            sctc: req.body.sctc
        }
    };
    await col2.updateOne({ sid: req.body.sid }, doc);
    res.send("updated successfully");
});

app.put('/ent', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            sname: req.body.sname,
            pstatus: req.body.pstatus,
            scompany: req.body.scompany,
            sctc: req.body.sctc
        }
    };
    await col3.updateOne({ sid: req.body.sid }, doc);
    res.send("updated successfully");
});

app.put('/fac', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            sname: req.body.sname,
            pstatus: req.body.pstatus,
            scompany: req.body.scompany,
            sctc: req.body.sctc
        }
    };
    await col4.updateOne({ sid: req.body.sid }, doc);
    res.send("updated successfully");
});

app.put('/vol', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            parentName: req.body.parentName,
            gender: req.body.gender,
            age: req.body.age,
            mobile: req.body.mobile,
            email: req.body.email,
            studentId: req.body.studentId,
            studentName: req.body.studentName,
            department: req.body.department,
            purpose: req.body.purpose,
            date: req.body.date,
            time: req.body.time,
            fileName: req.body.fileName
        }
    };
    await col5.updateOne({ studentId: req.body.studentId }, doc);
    res.send("updated successfully");
});

app.get('/display', async (req, res) => {
    var result = await col2.find().toArray();
    res.send(result);
});

app.delete('/delete', async (req, res) => {
    console.log(req.query);
    await col2.deleteOne({ sid: req.query.id });
    res.send("deleted");
});

app.get('/disp', async (req, res) => {
    var result = await col3.find().toArray();
    res.send(result);
});

app.delete('/del', async (req, res) => {
    console.log(req.query);
    await col3.deleteOne({ sid: req.query.id });
    res.send("deleted");
});

app.get('/d', async (req, res) => {
    var result = await col4.find().toArray();
    console.log('in d', result);
    res.send(result);

});

app.delete('/de', async (req, res) => {
    console.log(req.query);
    await col4.deleteOne({ sid: req.query.id });
    res.send("deleted");
});

app.get('/displ', async (req, res) => {
    var result = await col5.find().toArray();
    res.send(result);
});

app.delete('/dlet', async (req, res) => {
    console.log(req.query);
    await col5.deleteOne({ studentId: req.query.id });
    res.send("deleted");
});

app.listen(8081, () => {
    console.log("Server Running on http://localhost:8081");
});
