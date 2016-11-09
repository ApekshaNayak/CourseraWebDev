(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'templates/itemList.template.html',
  bindings: {
    item: '<'
  }
});

})();