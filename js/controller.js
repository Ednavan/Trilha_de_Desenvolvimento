angular.module("meuModulo").controller("indexController", function ($scope, $http) {

    $scope.data={};
    $scope.submit=function(){
        console.log('clicked sumit');
        $http({
            url:'http://localhost:3000/arrayProduto',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse){
            console.log('response:', httpResponse);
        })
    }



    
    $http.get('http://localhost:3000/arrayProduto').
    then(function(res){
    (console.log(res))
    $scope.arrayProduto = res.data;
    });
    
    /*
    $http.post({
        method: 'POST',
        url: 'http://localhost:3000/arrayProduto',
        data: $.param({
            nome: $scope('#inputProduto'),

        }
        )
      })
      .then(function (success) {
        callback(success);
      }, function (error) {
        errorCallback(error.data);
      });
      */




});



 /*
$(document).ready(function(){
   $('input.money').mask('#.##0,00', {reverse: true});

});
*/



$(function() {
    $('#money').maskMoney();
  });


$(document).ready(function(){
$('#exampleModal2').modal({backdrop: 'static', keyboard: false}) 

});


$(document).ready(function(){
$("#exampleModal").modal({backdrop:'static', keyboard:false})

});



/*configuração  de campo de validacao caso clique em (sim)*/
function limpa(){
    if(document.getElementById('inputProduto').value!=""){
        document.getElementById('inputProduto').value="",
        document.getElementById('inputDescricao').value="",
        document.getElementById('money').value="",
        document.getElementById('inputQtd').value="",
        $("#exampleModal2").modal('hide');
    }
}


function formu(){
    if(document.dados.text.inputProduto){
        document.dados.text.inputProduto.focus();
        alert("preencha campo nome corretamente!");
        return false;
    }
}













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
