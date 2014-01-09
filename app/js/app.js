'use strict';


var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);
//angular.module('ui.utils',
//angular.module('doc.ui-utils', ['ui.utils', 'prettifyDirective' ]);


myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/listazadan', {
            templateUrl: 'view/todo/listazadan.html',
            controller: 'todoCtrl'
        })
        .when('/edycja/:id', {
            templateUrl: 'view/todo/edycja.html',
            controller: ''
        })
        .otherwise({
            redirectTo: '/listazadan'
        });

    }
]);


