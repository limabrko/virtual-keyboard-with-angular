'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:keyboard
 * @description
 * # keyboard
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('keyboard', function () {
    return {
        templateUrl: 'views/keyboard/korean.html',
        restrict: 'E'
    };
});
