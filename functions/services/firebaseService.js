const admin = require('firebase-admin');
let db;

const  initFirebase = () => {
    let serviceAccount = require("../fir-test-80657-firebase-adminsdk-n4l81-7bef37635d.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://fir-test-80657.firebaseio.com"
    });

    console.log('Firebase init');

    db = admin.firestore();
    db.settings({timestampsInSnapshots: true});
};

const pushTodo = (todo) =>{
    let todoRef = db.collection('todoList').doc('todos');
    return todoRef.update({
        [Date.now()]: todo
    })
};

const getTodos = () =>{
    return db.collection('todoList').doc('todos').get()
};

module.exports = {initFirebase, pushTodo, getTodos};