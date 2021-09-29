describe('indexController', function() {
    var arrayProduto;

    beforeEach(angular.mock.module('api.arrayProduto'));

    beforeEach(inject(function(produto){
        arrayProduto = produto
    }))
    it('serviço existe?',function(){
        expect(arrayProduto).toBeDefined();
    })
});