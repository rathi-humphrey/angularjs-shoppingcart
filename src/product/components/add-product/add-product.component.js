angular.module('shoppingcart.product')
    .controller('AddProductCtrl', ['ProductService', 
    function(ProductService){
        this.newProduct = {};

        this.onFormSubmit = function(e,form){
            e.preventDefault();
            if(form.$valid){
                console.log(this.newProduct);
                ProductService.addProduct(this.newProduct).then(function(){
                    alert('added successfully');
                });
            }else{
                alert('Form Invalid');
            }
        };
    }])
    .component('addProduct', {
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller:'AddProductCtrl'
    });