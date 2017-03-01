/**
 * Created by xiangkun on 2017/1/24.
 */
angular.module("myapp")
    .controller("homeCtrl",function ($scope,mydata) {
        /*将接受到的data赋值给controller*/
       $scope.data=mydata.findAll();
    });
