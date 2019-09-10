function todoApp() {
  return {
    restrict: 'E', // behaviour element
    scope: {},
    template: `
    <div>
    <div>
      <h2>Status</h2>
      <div>
        Total: <span>{{todo.total}}</span>
      </div>
      <div>
        completed: <span>{{todo.completed}}</span>
      </div>
      <div>
        incomplete: <span>{{todo.inComplete}}</span>
      </div>
    </div>
    <div>
      <form ng-submit="todo.add();">
        <input type="text" ng-model="todo.newTodo" />
      </form>
    </div>
    <div class="todo">
      <ul class="todo__list">
        <li ng-repeat="eachTodo in todo.list">
          <input type="checkbox" id="todo-{{eachTodo.id}}" ng-model="eachTodo.completed"
            ng-change="todo.toggle(eachTodo, $index);" />
          <label class="toggle" for="todo-{{eachTodo.id}}"></label>
          <p ng-dblclick="oldTodo = eachTodo.title; editMode = true;" ng-hide="editMode">{{ eachTodo.title }}</p>
          <div ng-show="editMode">
            <input type="text" ng-model="eachTodo.title"
              ng-blur="todo.update(eachTodo, $index, oldTodo); editMode = false;" placeholder="Add New Todo"
              todo-autofocus="editMode" />
          </div>
          <a href="" ng-click="todo.remove(eachTodo, $index);">X</a>
        </li>
      </ul>
    </div>
    <h1 ng-show="todo.errorMessage" style="color: red;">{{todo.errorMessage}}</h1>
  </div>
    `,
    controller: 'TodoController as todo',
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp);
