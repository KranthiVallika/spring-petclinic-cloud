'use strict';

angular.module('adoptNew', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('adoptNew', {
                parent: 'app',
                url: '/adoptNew',
                template: '<adopt-new></adopt-new>'
            })
    }]);
