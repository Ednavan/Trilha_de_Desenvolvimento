angular.module("meuModulo").controller("indexController", function ($scope, $http) {
    
    $scope.data={};

        

        
        $scope.submit=function(){
            if( $("#inputProduto").val() !="" & $('#inputDescricao').val() != "" & $('#valor').val() != "" &  $('#inputQtd').val() != "" ){
        console.log('clicked sumit');
        $http({
            url:'http://localhost:3000/arrayProduto',
            method: 'POST',
            data: $scope.data,
       
        }).then(function (){
            
            $('#modalAdiciona').modal('toggle')
                        
        }).catch(function(){
           
            $('#modalErro').modal('toggle')
           
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
$('#modalAdiciona').modal({backdrop: 'static', keyboard: false}) 

});

/*bloqueia modal quando clica fora da página */
$(document).ready(function(){
$("#exampleModal").modal({backdrop:'static', keyboard:false})

});


/*bloqueia modal quando clica fora da página */
$(document).ready(function(){
    $('#modalErro').modal({backdrop: 'static', keyboard: false}) 
    
});

    


/*configuração  de campo de validacao caso clique em (sim)*/
function limpa(){
    if(document.getElementById('inputProduto').value!=""){
        document.getElementById('inputProduto').value="",
        document.getElementById('inputDescricao').value="",
        document.getElementById('valor').value="",
        document.getElementById('inputQtd').value="",
        $("#modalAdiciona").modal('hide');
    }
}


function preserv(){
  
        $("#modalErro").modal('hide');
    
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


function formatarMoeda(){
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace( /([0-9]{2})$/g, ",$1");

    if(valor.length > 6){
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    }
    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}




/*
$(document).ready(function(){
    $("#inputValorProduto").mask("R$ 0,00")
});
*/



