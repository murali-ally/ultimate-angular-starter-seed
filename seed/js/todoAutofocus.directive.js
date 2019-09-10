function todoAutofocus() {
  return {
    restrict: 'A', // restricting behaviour to attribute,
    scope: false, // inheriting global scope.
    link: function ($scope, $element, $attrs) {
      $scope.$watch($attrs.todoAutofocus, function (newValue, oldValue) {
        if (newValue) {
          // setTimeout is to ensure, focus is happening after all other events.
          window.setTimeout(function () {
            $element[0].focus();
          }, 0);
        }
      });
    },
  };
}

angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus);
