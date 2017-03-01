/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp")
    .controller("cityCtrl",function($scope,$stateParams,mydata){


        $scope.address=[

            {province:"南京",cities:["玄武区","鼓楼区","秦淮区","雨花台区"],
                imgsrc:"images/timg.jpeg",price:3750,size:"2室1厅1厨1卫1阳台",
                add:"南京市鼓楼区首开知语城",
                introduce:"房源介绍： 1、户型：2室1厅1厨1卫1阳台 2、朝向：南北通透 3、面积：95 4、价格：3750元每月 5、环境：房子采光好，小区环境优美，周围交通方便，购物方便 。 如果您有要的请和我联系，我愿意为您找个温馨的家."
            },

            {province:"北京",cities:["东城区","西城区","宣武区","崇文区"],
                imgsrc:"images/sp.jpg",price:3600,size:"三室两厅 130平精装房",
                add:"北京市东城区金园华都",
                introduce:" 房源介绍：小区概况西环里位于附近小区居住环境好社区比较完善，是大片的居民区，周边生活交通都比较便利，离各大院校、医院都不远。房屋情况面积：60.98平方（建筑面积户型：2室1厅1厨1卫2阳台 楼层：5层,共6层 朝向：南北通透 装修：精装修 "},

            {province:"上海",cities:["青浦区","徐汇区","普陀区","闸北区"],
                imgsrc:"images/ystk.jpg",price:2200,size:"一室一厅 50平简装房",
                add:"上海市青浦区世纪花园",
                introduce:"房源介绍：房格局方正，南向使用率超赞，1200元/月诚心出租"},

            {province:"广州",cities:["荔枝区","天河区","白云区","番禺区"],
                imgsrc:"images/1951o.jpg",price:3200,size:"三室两厅 130平精装房",
                add:"广州市荔枝区水榭花都",
                introduce:"房源介绍：1、客厅挑高、宽敞舒适、阳光非常充足2、卧室搭配的很新颖，使用率非常之高3、厨房带阳台，让您和家人有足够的空间展现私家厨艺4、连接客厅和厨房之间是您和家人享受美味的餐厅，足足可摆下多人桌，让您热情的招待亲朋好友 "},

            {province:"深圳",cities:["罗湖区","福田区","南山区","宝安区"],

                imgsrc:"images/Xl1QKPm_sp.jpg",price:3200,size:"两室一厅 90平精装房",
                add:"深圳市罗湖区锦瑟苑",
                introduce:"房源介绍：1、社区环境好，环境优美，适宜居住，人文素质高，物业管理完善；2、小区的容积率非常小，属于低密度社区 ，非常适宜居住3、小区的绿化率高，让您感受花园一样的家"},

            {province:"大连",cities:["中山区","西岗区","沙河口区","甘井子区"],
                imgsrc:"images/843p9914ql1zzq4_sp.jpg",price:3188,size:"三室两厅 156平精装房",
                add:"大连市中山区abc之城",
                introduce:"房源介绍：1、面积156平米有阳台，晾晒方便；2、小区绿化面积大，物业服务佳；3、车位充足，不用担心夜归到处找停车位；"}
        ];



        $scope.place= {};
            angular.forEach($scope.address,function (place) {
                if(place.province == $stateParams.province){
                    $scope.place = place;
                    return;
                }
            });


        $scope.transfer=function (place) {
            mydata.transfer(place);
        };


        $scope.data=mydata.findAll();
});