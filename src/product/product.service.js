angular.module('shoppingcart.product')
    .service('ProductService', ['$http', 'AppConstant',
     function($http, AppConstant){

        this.getProducts = function(){
            return $http.get('http://localhost:3000/products');
        };

        this.addProduct = function(){

        };

        this.getProductDetails = function(productId){
            return $http.get(AppConstant.urls.product+'/'+productId)
            .then(function(res){
                return res.data;
            },function(){
                alert("Error Happened");
            });
        };

    }]);