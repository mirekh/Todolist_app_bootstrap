'use strict';
var myControllers = angular.module('myControllers',['ngAnimate']);



/**
 * todoCtrl
 */
myControllers.controller('todoCtrl', function ($scope, $http, $routeParams, zadaniaFactory) {
    /**
     * Watch
     * @type {*}
     */
    $scope.$watch('akt', function(){
        $scope.nazwa2 = "";
    });

    $scope.zadania = zadaniaFactory.getList();
    $scope.listazamknijotworz = [
        {value:1,label:"otwarte"},
        {value:2,label:"zamknięte"}
    ];//LB
    $scope.listapowod = [
        {value:1,label:"zrealizowane"},
        {value:2,label:"odłożone"}
    ];//LB
    $scope.zamknijotworz = 1;
    $scope.powod = 1;

    /**
     * Metody
     */
    /**
     * zwraca etykietę F1
     * @param i
     * @return {*}
     */
    $scope.getF1 = function(i){
        if(!i || i>$scope.listazamknijotworz.length || i<0) return '';
        var obj = _.findWhere($scope.listazamknijotworz,{value:i});
        return (obj)? obj.label : '';
    };
    /**
     * zwraca etykietę F2
     * @param i
     * @return {*}
     */
    $scope.getF2 = function(i){
        if(!i || i>$scope.listapowod.length || i<0) return '';
        var obj = _.findWhere($scope.listapowod,{value:i});
        return (obj)? obj.label : '';
    };
    /**
     * widok domyślny
     */
    $scope.reset = function(){
        $scope.zamknijotworz = 1;
        $scope.powod = 1;
        $scope.nazwa = "";
        $scope.akt = 0;
    };
    /**
     * dodaje nowe zadanie
     * @param nazwa
     */
    $scope.dodajZadanie = function(nazwa) {
        zadaniaFactory.addZadanie({
            id:$scope.getNewId(),
            nazwa:nazwa,
            f1:1,
            f2:0
        });
        $scope.reset();
    };
    /**
     * zapamiętaj zadanie
     * @param id
     * @param nazwa
     * @param zamknijotworz
     * @param powod
     */
    $scope.zapiszZadanie = function(id,nazwa,zamknijotworz,powod){
        zadaniaFactory.saveZadanie({
            id:id,
            nazwa:nazwa,
            f1:zamknijotworz,
            f2:powod
        });
        $scope.reset();
    };
    /**
     * nowe ID
     * @return {*}
     */
    $scope.getNewId = function(){
        var ids = _.pluck($scope.zadania,'id');
        return (_.max(ids)+1);
    };
    /**
     * usuwa zadanie
     * @param u
     */
    $scope.usunZadanie = function (u) {
        zadaniaFactory.delZadanie(u.id);
    };
    /**
     * edytuj wybrane zadanie
     * @param u
     */
    $scope.edytujZadanie = function (u) {
        $scope.id = u.id;
        $scope.nazwa = u.nazwa;
        $scope.zamknijotworz = u.f1;
        $scope.powod = u.f2;
        $scope.akt = 1;
        $scope.raw = u;
    };
    /**
     * sprawdza czy mozna dodać
     * @return {Boolean}
     */
    $scope.moznaDodac = function(){
        var tf = false;
        if($scope.nazwa){
            //t
            if($scope.akt==0) {
                //t
                tf = true;
            }else{
                //?
                if($scope.zamknijotworz==1){
                    //t
                    tf = true;
                }else{
                    if($scope.powod==1 || $scope.powod==2){
                        //t
                        tf = true;
                    }else{
                        //f
                        tf=false;
                    }
                }
            }
        }else{
            tf=false;
        }
        return tf;
    };
    $scope.init = function(){
        $scope.reset();
    };
    /**
     * init
     */
    $scope.init();


});





