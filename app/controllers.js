angular.module("meuModulo").controller("indexController", function ($scope) {
    $scope.titulo = "FILTRO";
    $scope.arrayProdutos = [

        { id:1, produto: "Notebook", descricao: "DellBrasil", valor: "R$ 3.197,00",  }, /*com o img, quero armazenar imagem*/
        { id:2, produto: "Cabo de Enthernet", descricao: "Amazon", valor: "R$ 220,00" },
        { id:3, produto: "Mouse", descricao: "logitech", valor: "R$ 140,00" },
        { id:4, produto: "Celular Xiaomi", descricao: "Amazon", valor: "R$ 987,00" },

    ];
   
    $scope.adicionaProduto = function(){
        $scope.arrayProdutos.push({produto: $scope.conteudo.produto, descricao: $scope.conteudo.descricao, valor: $scope.conteudo.valor});
        $scope.conteudo.produto = ''; /*definindo uma funcao que vai dar push para minha array utilizando o @scope*/
        
    };

    
    /*
    $scope.removeProduto = function(index){
      $scope.arrayProdutos.splice(index, 1)
            
     }
     */

     $scope.removeProduto = function(arrayProdutos){
         for (var index in $scope.arrayProdutos){
             var aux = $scope.arrayProdutos[index];
             if(arrayProdutos = aux){
                 $scope.arrayProdutos.splice(index, 1);
                }
            }
       };
         
    
      
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal1);
  });

 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal2);
  });
  
