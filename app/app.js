angular.module("meuModulo", [])

console.log("olá mundo")

var btn = document.querySelector('#switch-shadow');
var container = document.querySelector('.tag');


btn.addEventListener('click',function(){

    if(container.style.display === 'block'){
        container.style.display = 'none';
    
    }else{
        container.style.display ='block';
    }
});


