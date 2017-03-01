/**
 * Created by xiangkun on 2017/1/30.
 */
angular.module("myapp")
    .controller("collectionCtrl",function ($scope,mydata){
        $scope.data=mydata.findAll();
    });
