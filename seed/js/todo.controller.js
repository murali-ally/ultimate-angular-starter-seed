function TodoController($scope) {
  this.total = 0;
  this.completed = 0;
  this.inComplete = 0;
  this.newTodo = '';
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
    }
  ];

  this.add = function () {
    this.list.unshift({
      id: this.total,
      text: this.newTodo,
      completed: false,
    });
    this.newTodo = '';
    this.updateCount();
  };
  this.remove = function (index) {
    this.list.splice(index, 1);
    this.updateCount();
  };
  this.updateCount = function () {
    this.total = this.list.length;
    this.completed = this.list.filter(function (eachTodo) {
      return eachTodo.completed;
    }).length;
    this.inComplete = this.total - this.completed;
  };

  this.updateCount();
}

// TodoController.$inject = ['$scope'];
angular
  .module('app')
  .controller('TodoController', TodoController);
