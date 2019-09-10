function TodoController(TodoService) {
  var ctrl = this;
  ctrl.total = 0;
  ctrl.completed = 0;
  ctrl.inComplete = 0;
  ctrl.newTodo = '';
  ctrl.list = [];
  ctrl.errorMessage = '';

  ctrl.getTodos = function () {
    ctrl.clearErrorMessage();

    TodoService
      .fetch()
      .then(function (response) {
        if (response) {
          ctrl.list = response;
          ctrl.updateCount();
        } else {
          ctrl.errorMessage = 'Unable to fetch your todos! Please try again after sometime';
        }
      });
  };
  ctrl.add = function () {
    ctrl.clearErrorMessage();

    TodoService
      .add({
        title: ctrl.newTodo,
        completed: false,
      })
      .then(function (response) {
        if (response) {
          ctrl.list.unshift(response);
          ctrl.newTodo = '';
          ctrl.updateCount();
        } else {
          ctrl.errorMessage = 'Oops! Something went wrong while adding your todo';
        }
      });
  };
  ctrl.remove = function (todo, index) {
    ctrl.clearErrorMessage();

    TodoService
      .remove(todo)
      .then(function (response) {
        if (response) {
          ctrl.list.splice(index, 1);
          ctrl.updateCount();
        } else {
          ctrl.errorMessage = 'Oops! Something went wrong while removing your todo';
        }
      });
  };
  ctrl.update = function (todo, index, oldTodo) {
    ctrl.clearErrorMessage();

    if (!todo.title) {
      ctrl.remove(todo, index);
      return;
    }

    TodoService
      .update(todo)
      .then(function (response) {
        if (!response) {
          ctrl.list[index].title = oldTodo;
          ctrl.errorMessage = "We're unable to update your todo. Please try again after sometime"
        }
      });
  };
  ctrl.toggle = function (todo, index) {
    ctrl.clearErrorMessage();

    TodoService
      .update(todo)
      .then(function (response) {
        if (response) {
          ctrl.updateCount();
        } else {
          ctrl.list[index].completed = !ctrl.list[index].completed;
          ctrl.errorMessage = "We're unable to change your todo status. Please try again after sometime";
        }
      });
  };
  ctrl.clearErrorMessage = function () {
    ctrl.errorMessage = '';
  };
  ctrl.updateCount = function () {
    ctrl.total = ctrl.list.length;
    ctrl.completed = ctrl.list.filter(function (eachTodo) {
      return eachTodo.completed;
    }).length;
    ctrl.inComplete = ctrl.total - ctrl.completed;
  };

  ctrl.getTodos();
}

TodoController.$inject = ['TodoService'];
angular
  .module('app')
  .controller('TodoController', TodoController);
