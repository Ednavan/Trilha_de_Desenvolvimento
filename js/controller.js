angular.module("meuModulo").controller("indexController", function ($scope, $http) {
    
    $scope.data={};
 
    $scope.submit=function(){

        console.log('clicked sumit');
        $http({
            url:'http://localhost:3000/arrayProduto',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse){
            $('#exampleModal2').modal('toggle');
            console.log('response:', httpResponse); 
            
          
        }).catch(function(){
      
            $('#exampleModal3').modal('toggle')
           
           }
       )
    }

    
    $http.get('http://localhost:3000/arrayProduto').
    then(function(res){
    (console.log(res))
    $scope.arrayProduto = res.data;
   
    })
    

//    exibeAlert=function(){
        // if( $scope.data == 200){
        //     $('#exampleModal2').modal('toggle');
        // }else{
          
            
        // }
        // }
    
    }
        

   
);



 /*
$(document).ready(function(){
   $('input.money').mask('#.##0,00', {reverse: true});

});
*/



/*
function exibeAlert(){
        try{
        if( $("#inputProduto").val() == null || $("#inputProduto").val()  == "" || $("#inputDescricao").val() == null || $("#inputDescricao").val()  == "" ||   $("#inputQtd").val() == null || $("#inputQtd").val()  == "" || $("#money").val() == null || $("#money").val()  == ""){

        
         console.log("dados faltando para serem preenchidos");
        $('#exampleModal3').modal('toggle')
        }else{
          
            $('#exampleModal2').modal('toggle');
            
        }
        
       

        }catch{

        }
    
}

*/

/*

function exibeAlert(submit) {
   if($(submit) === 200 ){
    $('#exampleModal3').modal('toggle')
   }else{
    $('#exampleModal2').modal('toggle');
   }
}

*/


/*
function exibeAlert(err){
        
    if (err.status == 200) {
      
        $('#exampleModal2').modal('toggle');
    } else {
        $('#exampleModal3').modal('toggle')
    }
}
*/



$(function() {
    $('#money').maskMoney();
  });

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
        document.getElementById('money').value="",
        document.getElementById('inputQtd').value="",
        $("#exampleModal2").modal('hide');
    }
}


function preserv(){
  
        $("#exampleModal3").modal('hide');
    
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
