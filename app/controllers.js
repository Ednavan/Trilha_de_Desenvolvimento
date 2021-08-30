angular.module("meuModulo").controller("indexController", function ($scope) {
    $scope.titulo = "FILTRO";
    var arrayProdutos = [

        { id:1, Myproduto: "Notebook", descricao: "DellBrasil", valor: "R$ 3.197,00",  }, /*com o img, quero armazenar imagem*/
        { id:2, Myproduto: "Cabo de Enthernet", descricao: "Amazon", valor: "R$ 220,00" },
        { id:3, Myproduto: "Mouse", descricao: "logitech", valor: "R$ 140,00" },
        { id:4, Myproduto: "Celular Xiaomi", descricao: "Amazon", valor: "R$ 987,00" },

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

     $scope.arrayProdutos = arrayProdutos;
     $scope.produto = {};
     
     $scope.removeProduto = function(produto){

        for(var i=0; length=arrayProdutos.length; i <length, i++){
                if(arrayProdutos[i].id === produto.id){
                    arrayProdutos.splice(i, 1);
                    break;
                }
            }
     };
         

     $scope.editarProduto = function(produto){
        $('#modal1').openModal();
     }  
    
      
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal1);
  });

 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal2);
  });
  
