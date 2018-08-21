const firebaseService = require('../../services/firebaseService');

exports.addTodo = (req, res) => {
    const {todo} = req.body;

    firebaseService.pushTodo(todo)
        .then(() => {
            res.status(200).send()
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};

exports.getTodoList = (req, res) => {
    firebaseService.getTodos()
        .then((data) => {
            res.status(200).send(data._fieldsProto)

        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
    })
};