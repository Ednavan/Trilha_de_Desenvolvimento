angular.module("meuModulo", ['ngRoute'])
.config(function($routeProvider) {  //com routeProvide confiugrando serviço de rotas

    $routeProvider
    .when("/home",{
        templateUrl:"templates/home.html",
        controller: "indexController",

    })        //caminho da rota


    $routeProvider
    .when("/contato",{
        templateUrl: "templates/home.html"
    });


});      

