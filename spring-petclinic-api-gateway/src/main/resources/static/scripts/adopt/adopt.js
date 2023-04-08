'use strict';

angular.module('adopt', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('adopt', {
                parent: 'app',
                url: '/adopt',
                template: '<adopt></adopt>'
            })
    }]);
