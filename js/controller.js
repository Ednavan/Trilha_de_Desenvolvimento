angular.module("meuModulo").controller("indexController", function ($scope, $http) {

    $scope.data = {};
    $scope.submit = function () {

        if ($("#inputProduto").val() != "" & $('#inputDescricao').val() != "" & $('#valor').val() != "" & $('#inputQtd').val() != "" ) {
           
            console.log('clicked sumit');
            $http({
                url: 'http://localhost:3000/arrayProduto',
                method: 'POST',
                data: $scope.data,

            }).then(function () {

                $('#modalAdiciona').modal('toggle')

            }).catch(function () {

                $('#modalErro').modal('toggle')

            }
            )
        
        } else {
            alert("Não é possível cadastrar objetos sem conter todos os dados!")
       } 
    }

    $http.get('http://localhost:3000/arrayProduto').
        then(function (res) {
            (console.log(res))
            $scope.arrayProduto = res.data;

        })





    $scope.editar = function (a) {

        $scope.myVar = a;
       
        console.log($scope.myVar)
    }


    $scope.enviardados = function () {
        $http({
            url: 'http://localhost:3000/arrayProduto/' + $scope.myVar.id, //seleciona o dados atraves do id
            data: $scope.myVar, //envia os dados atraves do seu conjunto    
            method: "patch", //é mais importante é responsável pela ação do método
           
        }).then(function (tratamento) {
            console.log("SUCCESS");
            console.log(tratamento)
            $('#modalSucesso').modal('hide')
          
        }).catch(function() {
            console.log("chegou aqui");
            $('#modalErroEditar').modal('hide')
        })

    }   

    
        $scope.deletar=function(){
            $http({
                url: 'http://localhost:3000/arrayProduto/' + $scope.myVar.id,
                method: 'delete',
                
            }).then(function(){
                alert('User has deleted successfully')
                var index = $scope.myVar.indexOf(myVar);
                $scope.myVar.splice(index,1)
            })
        }
  
    
});


/*bloqueia modal quando clica fora da página */
$(document).ready(function () {
    $('#modalAdiciona').modal({ backdrop: 'static', keyboard: false })

});

/*bloqueia modal quando clica fora da página */
$(document).ready(function () {
    $("#exampleModal").modal({ backdrop: 'static', keyboard: false })

});


/*bloqueia modal quando clica fora da página */
$(document).ready(function () {
    $('#modalErro').modal({ backdrop: 'static', keyboard: false })

});



/*configuração  de campo de validacao caso clique em (sim)*/
function limpa() {
    if (document.getElementById('inputProduto').value != "") {
        document.getElementById('inputProduto').value = "",
            document.getElementById('inputDescricao').value = "",
            document.getElementById('valor').value = "",
            document.getElementById('inputQtd').value = "",
            $("#modalAdiciona").modal('hide');
    }
}


function preserv() {
    $("#modalErro").modal('hide');
}

function preservCancelar() {
    $("#exampleModal").modal('hide');
}

$(function () {
    $("#mascara").maskMoney({
        prefix: 'R$ ',
        allowNegative: true,
        thousands: '.',
        decimal: ','
    });
});


function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    }
    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';
}





