/**
 * Created by xiangkun on 2017/1/31.
 */
angular.module("myapp")
    .controller('preferentialCtrl',function($scope){
    //$scope.res={link:'no.html'};
    //这里的link是为了你在页面引入模板而写的
    $scope.selected=0;
    $scope.lis=[{name:'未使用'},{name:'已使用'}];
    $scope.divs=[{html:'images/cheap_03.jpg',
        img:'images/cheap_08.jpg',
        img1:'images/cheap_06.jpg'
                    },{html:'images/cheap_06.jpg'}];
    $scope.show=function(row){
        $scope.selected=row;
    }
});
