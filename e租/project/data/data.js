/**
 * Created by xiangkun on 2017/1/25.
 */
angular.module("myapp")
    .factory("mydata",function () {
        var data=[{province:"南京",cities:["玄武区","鼓楼区","秦淮区","雨花台区"],
            imgsrc:"images/timg.jpeg",price:3750,size:"三室两厅 130平精装房",
            add:"南京市鼓楼区首开知语城",
            introduce:"房源介绍： 1、户型：2室1厅1厨1卫1阳台 2、朝向：南北通透 3、面积：95 4、价格：1750元每月 5、环境：房子采光好，小区环境优美，周围交通方便，购物方便 。 如果您有要的请和我联系,，我愿意为您找个温馨的家."
        }];

        return{
            /*--------验证是否冲突--------------*/
            transfer:function (arr) {
               for(var i=0;i<arr.length;i++){
                    var item=data[i];
                    if(item.province==arr.province){
                        return;
                    }
                }
                data.length=0;
                data.push(arr);

            },
            /*返回整个data*/
            findAll:function(){
                return data;
            }
        };
    });
