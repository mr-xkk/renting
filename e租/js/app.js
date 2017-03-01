/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp",["ionic"]);
angular.module("myapp")
    .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
        alert("请使用火狐⊙﹏⊙");
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");
        $stateProvider
            .state(
                "start",{
                    url:"/start",
                    templateUrl:"project/start/start.html"
                })
            .state("tabs", {
                url: "/tabs",
                abstract:true,
                templateUrl: "project/tabs/tabs.html"
            })
            .state(
                "tabs.home", {
                    url: "/home",
                    views: {
                        "tabs-home": {
                            templateUrl: "project/home/home.html"
                        },controller:"homeCtrl"
                    }
                })
            .state(
                "tabs.city", {
                    url: "/city?:province",
                    views: {
                        "tabs-home": {
                            templateUrl: "project/city/city.html"
                        }, controller: "cityCtrl"
                    }
                })
            .state(
                "tabs.price", {
                    url: "/price",
                    views: {
                        "tabs-price": {
                            templateUrl: "project/price/price.html"
                        },controller:"priceCtrl"
                    }
                })
            .state(
                "tabs.myself", {
                    url: "/myself",
                    views: {
                        "tabs-myself": {
                            templateUrl: "project/myself/myself.html"
                        },controller:"myselfCtrl"
                    }
                })
            .state(
                "tabs.collection", {
                    url: "/collection?:province",
                    views: {
                        "tabs-myself": {
                            templateUrl: "project/collection/collection.html"
                        }
                    }
                })
            .state(
                "tabs.preferential", {
                    url: "/preferential?:province",
                    views: {
                        "tabs-myself": {
                            templateUrl: "project/preferential/preferential.html"
                        },controller:"preferentialCtrl"
                    }
                })
            .state(
                "tabs.find",{
                    url:"/find",
                    views:{
                        "tabs-find":{
                            templateUrl:"project/find/find.html",
                        },controller:"findCtrl"
                    }
                }
            )
        $urlRouterProvider.otherwise("/start");
    });
