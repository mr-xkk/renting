/**
 * Created by xiangkun on 2017/1/28.
 */
angular.module("myapp")
    .controller("myselfCtrl",function ($scope,mydata) {
        $scope.data=mydata.findAll();
        /*实现获取数据的数量显示*/
        $scope.num =$scope.data.length;
    });