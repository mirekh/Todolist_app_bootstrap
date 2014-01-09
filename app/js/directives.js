'use strict';
angular.module('myApp.directives', []);


/* Directives */


myApp.directive('mhTable',function(){
    return{
        link:function(scope, element, attrs){
            element.attr('nowytag','jakaswartosc');
            //put code here...
        },
        restrict:'E',
        scope: {
            nazwa: '=nazwa',
            info: '=info'
        },
        templateUrl:'view/test/mh-table.html',
        controller:'mhtableCtrl'
    }
});
