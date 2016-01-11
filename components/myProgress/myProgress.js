'use strict';

angular.module('dailyclean.myProgress', [])

    .directive('myProgress', function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/myProgress/myProgress.html',
            scope: {
                steps: '=steps'
            },
            require: 'ngModel',
            link: function ($scope, $elm, $attrs, ngModel) {
                ngModel.$render = function () {
                    $scope.progress = ngModel.$modelValue;
                };

                ngModel.$viewChangeListeners.push(function() {
                    $scope.progress = ngModel.$modelValue;
                });

                $scope.setProgress = function (progress) {
                    ngModel.$setViewValue(progress);
                };
            }
        };
    });
