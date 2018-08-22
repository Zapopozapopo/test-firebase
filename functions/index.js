const functions = require('firebase-functions');
const firebaseService = require('./services/firebaseService');
firebaseService.initFirebase();

const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
app.use(cors);

app.post('/addTodo', (req, res) => {
    const {todo} = req.body;
    firebaseService.pushTodo(todo)
        .then(() => {
            res.status(200).send()
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

app.get('/getTodoList',(req,res)=>{
    firebaseService.getTodos()
        .then((data) => {
            res.status(200).send(data._fieldsProto)
        }).catch((err) => {
        res.status(500).send(err);
    })
});

exports.app = functions.https.onRequest(app);
