/**
 * Created by xiangkun on 2017/1/27.
 */
angular.module("myapp")
    .controller("priceCtrl",function ($scope,mydata,$ionicPopup) {
        $scope.data=mydata.findAll();
        /*实现收藏增加*/
        $scope.like=0;
        $scope.showAlert = function() {
            $ionicPopup.alert({
                title: '收藏成功',
                template: '快去看看你的收藏吧!!!'
            });
            $scope.like++;
            $scope.data=mydata.findAll();
        };
    });