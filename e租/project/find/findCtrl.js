/**
 * Created by xiangkun on 2017/1/23.
 */
angular.module("myapp")
    .controller("findCtrl",function dataController($scope, $ionicSideMenuDelegate,$http) {
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
        $scope.page = 0;
        $scope.total = 1;
        $scope.information  = [];
        /*获取json数据*/
            $scope.getInformation = function () {
                $scope.page++;
                var url = "message.json";   // 请求的url
                $http.get(url)
                    .success(function (response) {
                        console.log(response);
                        angular.forEach(response.detail , function (informations) {
                            $scope.information .push(informations);
                        });
                        $scope.total = 8;
                    })
                    .finally(function () {
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    });
            };
            $scope.getInformation();
        }
    );
