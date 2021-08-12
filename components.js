angular.module('components', [])

function close_window(){
    if(confirm("Fechar Janela?")){
        close();
    }else{
        alert("Deseja continuar nesse site?")
    }
}