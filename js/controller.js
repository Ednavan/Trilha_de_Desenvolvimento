angular.module("meuModulo").controller("indexController", function ($scope, $http) {

    $scope.data = {};
    $scope.submit = function () {

        if ($("#inputProduto").val() != "" & $('#inputDescricao').val() != "" & $('#valor').val() != "" & $('#inputQtd').val() != "") {

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
        console.log('edit', $scope.myVar)

    }


    $scope.enviardados = function () {
        $http({
            url: 'http://localhost:3000/arrayProduto/' + $scope.myVar.id, //seleciona o dados atraves do id
            data: $scope.myVar, //envia os dados atraves do seu conjunto    
            method: "patch", //é mais importante é responsável pela ação do método

        }).then(function (tratamento) {
            console.log("SUCCESS");
            console.log(tratamento)

            $('#modaldadosalterados').modal("show")


        }).catch(function () {
            console.log("chegou aqui");
            $('#modalErroEditar').modal("show")
        })

    }



    $scope.delete = function (a) {
        console.log('chego', $scope.myVar)
        $scope.myVar = a;

    }

    $scope.enviodeletando = function (myVar) {
        console.log($scope.myVar)
        $http({
            url: 'http://localhost:3000/arrayProduto/' + $scope.myVar.id,
            method: 'DELETE',
            data: $scope.myVar

        }).then(function () {

            var index = $scope.arrayProduto.indexOf();
            $scope.arrayProduto.splice(index, 1);
            $('#excluiPro').modal('show')

        }).catch(function () {
            $('#erroAoExcluirProtudo').modal('show')
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


$(document).ready(function () {
    $('#modaldadosalterados').modal({ backdrop: 'static', keyboard: false })

});


$(document).ready(function () {
    $('#modalErroEditar').modal({ backdrop: 'static', keyboard: false })

});


$(document).ready(function () {
    $('#excluiPro').modal({ backdrop: 'static', keyboard: false })

});



$(document).ready(function () {
    $('#erroAoExcluirProtudo').modal({ backdrop: 'static', keyboard: false })

});


$(document).ready(function () {
    $('#modalErroEditar').modal({ backdrop: 'static', keyboard: false })

});



$(document).ready(function () {
    $('#modalDesejaExcluir').modal({ backdrop: 'static', keyboard: false })

});



$(document).ready(function () {
    $('#modalEdicaoProduto').modal({ backdrop: 'static', keyboard: false })

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

function preservEditarErro() {
    $("#modalErroEditar").modal('hide');
}

function modalVoltar() {
    $("#erroAoExcluirProtudo").modal('hide');
}






