const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// let id = '5b0d043cb3797bac2660117cabc';
//
// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });
//
// Todo.findById(id).then((todos) => {
//     if(!todos) {
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos)
// }).catch((e) => console.log(e));