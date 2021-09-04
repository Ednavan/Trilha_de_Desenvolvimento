angular.module("meuModulo").controller("indexController", function ($scope) {
    $scope.titulo = "FILTRO";

    var arrProduto= [];


});

 /*
$(document).ready(function(){
   $('input.money').mask('#.##0,00', {reverse: true});

});
*/

$(function() {
    $('#currency').maskMoney();
  });


$(document).ready(function(){
$('#exampleModal2').modal({backdrop: 'static', keyboard: false}) 

});


$(document).ready(function(){
$("#exampleModal").modal({backdrop:'static', keyboard:false})
});
/*
$(document).ready(function(){
    $("#inputValorProduto").mask("R$ 0,00")
});
*/



/*
function mascara_valor(){
    var valor = document.getElementById('inputValorProduto')
    if(valor.value.length === 1 || valor.value.length == 2 ){
       valor.value =  valor.value + ","
    }
    
}

*/
