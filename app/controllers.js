angular.module("meuModulo").controller("indexController", function ($scope) {
    $scope.titulo = "FILTRO";
    $scope.arrayProdutos = [

        { produto: "Notebook", descricao: "DellBrasil", valor: "R$ 3.197,00" }, /*com o img, quero armazenar imagem*/
        { produto: "Cabo de Enthernet", descricao: "Amazon", valor: "R$ 220,00" },
        { produto: "Mouse", descricao: "logitech", valor: "R$ 140,00" },
        { produto: "Celular Xiaomi", descricao: "Amazon", valor: "R$ 987,00" },

    ];



});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal1);
  });

 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal2);
  });