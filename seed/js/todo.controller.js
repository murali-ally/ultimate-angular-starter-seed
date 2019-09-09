function TodoController() {
    this.list = [{
        text: 'My first todo list',
        completed: false,
    },
    {
        text: 'My second todo list',
        completed: false,
    },
    {
        text: 'My third todo list',
        completed: false,
    },
    {
        text: 'My fourth todo list',
        completed: false,
    }];
}

angular
    .module('app')
    .controller('TodoController', TodoController);