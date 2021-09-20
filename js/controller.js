angular.module("meuModulo").controller("indexController", function ($scope, $http) {
    
    $scope.data={};

        

        
        $scope.submit=function(){
            if( $("#inputProduto").val() !="" & $('#inputDescricao').val() != "" & $('#mascara').val() != "" &  $('#inputQtd').val() != "" ){
        console.log('clicked sumit');
        $http({
            url:'http://localhost:3000/arrayProduto',
            method: 'POST',
            data: $scope.data,
       
        }).then(function (){
            
            $('#exampleModal2').modal('toggle')
                        
        }).catch(function(){
           
            $('#exampleModal3').modal('toggle')
           
           }
       )
    }else{
        alert("Não é possível cadastrar objetos sem conter todos os dados!")
    }}

    
    $http.get('http://localhost:3000/arrayProduto').
    then(function(res){
    (console.log(res))
    $scope.arrayProduto = res.data;
   
    })

    
    }
    
   
);



 /*
$(document).ready(function(){
   $('input.money').mask('#.##0,00', {reverse: true});

});
*/


/*bloqueia modal quando clica fora da página */
$(document).ready(function(){
$('#exampleModal2').modal({backdrop: 'static', keyboard: false}) 

});

/*bloqueia modal quando clica fora da página */
$(document).ready(function(){
$("#exampleModal").modal({backdrop:'static', keyboard:false})

});


/*bloqueia modal quando clica fora da página */
$(document).ready(function(){
    $('#exampleModal3').modal({backdrop: 'static', keyboard: false}) 
    
});

    


/*configuração  de campo de validacao caso clique em (sim)*/
function limpa(){
    if(document.getElementById('inputProduto').value!=""){
        document.getElementById('inputProduto').value="",
        document.getElementById('inputDescricao').value="",
        document.getElementById('mascara').value="",
        document.getElementById('inputQtd').value="",
        $("#exampleModal2").modal('hide');
    }
}


function preserv(){
  
        $("#exampleModal3").modal('hide');
    
}





/*
 $(function(){
    $("#money").maskMoney();
 });
*/

 $(function(){
    $("#mascara").maskMoney({
       prefix: 'R$ ',
       allowNegative: true,
       thousands: '.',
       decimal: ','
    });
 });







/*
$(document).ready(function(){
    $("#inputValorProduto").mask("R$ 0,00")
});
*/



