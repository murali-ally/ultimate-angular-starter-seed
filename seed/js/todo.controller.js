function TodoController() {
    this.list = [{
        id: 0,
        text: 'My first todo list',
        completed: false,
    },
    {
        id: 1,
        text: 'My second todo list',
        completed: true,
    },
    {
        id: 2,
        text: 'My third todo list',
        completed: false,
    },
    {
        id: 3,
        text: 'My fourth todo list',
        completed: false,
    }];

    this.total = this.list.length;
    this.completed = this.list.filter(function(eachTodo) { return eachTodo.completed; }).length;
    this.inComplete = this.total -  this.completed;
}

angular
    .module('app')
    .controller('TodoController', TodoController);