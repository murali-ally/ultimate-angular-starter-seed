function TodoService($http) {
  var API_END_POINT = '//jsonplaceholder.typicode.com/todos/';

  function fetchTodos() {
    return $http
      .get(API_END_POINT)
      .then(function (response) {
        return response.data.splice(0, 10);
      }, function () {
        return null;
      });
  }

  function addTodo(todo) {
    return $http
      .post(API_END_POINT, todo)
      .then(function (response) {
          return response.data;
        },
        function () {
          return null;
        });
  }

  function updateTodo(todo) {
    return $http
      .put(API_END_POINT + todo.id, todo)
      .then(function (response) {
        return response.data;
      }, function () {
        return null;
      });
  }

  function deleteTodo(todo) {
    return $http
      .delete(API_END_POINT + todo.id)
      .then(function (response) {
        return response.data;
      }, function () {
        return null;
      });
  }

  return {
    fetch: fetchTodos,
    add: addTodo,
    update: updateTodo,
    remove: deleteTodo,
  };
}

TodoService.$inject = ['$http'];

angular
  .module('app')
  .factory('TodoService', TodoService);
