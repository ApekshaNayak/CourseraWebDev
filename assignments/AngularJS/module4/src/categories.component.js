(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

})();
