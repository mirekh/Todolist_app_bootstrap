'use strict';
/**
 * @author mh
 */

/**
 * FACTORY
 * @version OK
 */
myControllers.factory('zadaniaFactory',['$http', function($scope, $http){
   var f = {};
    var zadania = [
        {"id":1,"nazwa":"Zrobić zakupy","f1":2,"f2":2},
        {"id":2,"nazwa":"Dokońyć aplikację","f1":2,"f2":1},
        {"id":3,"nazwa":"Odwieźć babcię","f1":1,"f2":"0"},
        {"id":4,"nazwa":"Odwieźć dziadka","f1":1,"f2":"0"},
        {"id":5,"nazwa":"Odwieźć ciocię","f1":2,"f2":1},
        {"id":6,"nazwa":"Kupić sweter","f1":1,"f2":"0"}
    ];
    /**
     * pobierz listę obiektów
     * @return {Array}
     */
    f.getList = function(){
        return zadania;
    };
    /**
     * pobierz zadanie
     * @param id
     */
    f.getZadanie = function(id){
        return _.findWhere(zadania, {id:id})
    };
    /**
     * dodaj zadanie
     * @param item
     */
    f.addZadanie = function(item){
        zadania.push(item);
    };
    /**
     * powierz index
     * @param id
     * @return {*|Number}
     */
    f.getIndexZadnie = function (id) {
        var arr = _.pluck(zadania, 'id');
        return _.indexOf(arr,id);
    };
    /**
     * kasuj zadanie
     * @param id
     * @return {Number} ile skasowanych
     */
    f.delZadanie = function(id){
        var idx = this.getIndexZadnie(id);
        if(idx>=0){
            zadania.splice(idx,1);
        }
    };
    /**
     * zapisz zadanie
     * @param item
     * @return {Boolean}
     */
    f.saveZadanie = function(item){
        var idx = this.getIndexZadnie(item.id);
        if(idx>=0){
             zadania[idx]= {
                id:item.id,
                nazwa:item.nazwa,
                f1:item.f1,
                f2:item.f2
            };
            return true;
        }
        return false;
    };
    return f;
}]);
