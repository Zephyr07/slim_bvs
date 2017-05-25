/**
 * Created by Edward NANDA on 17/02/2017.
 */

controller
    .controller("AppCtrl",['$scope',function($scope){
        $scope.current=new Date();
    }])
    .controller("HeaderCtrl",['$scope',function($scope){
        $scope.current=new Date();
    }])
    .controller("FooterCtrl",['$scope',function($scope){
        $scope.current=new Date();
        $scope.enregistrerSuggestion=function(){
            console.log($scope.suggestion);
            $("#closeSuggestion").trigger("click");

        };
    }])

    .controller("CommandeCtrl",['$scope','$stateParams','$state',function($scope,$stateParams,$state){
        $scope.current=new Date();

        $scope.commande=[];
        var mode=$stateParams.mode;

        $scope.detail_produit=function(produit){
            $scope.produit=produit;
            $("#btn_detail_produit").trigger("click");
        };

        $scope.memoriser_commande=function(){
            $state.go("accueil");
        }

    }])

    .controller("AccueilCtrl",['$scope',function($scope){
        $scope.current=new Date();
        $scope.statutAuth=true;
        $scope.code="0000";

        //authentification pour ouverture de la caisse
        $scope.authentification=function(code){
            console.log(code);
            if(code=="0000"){
                $scope.statutAuth=false;
            }
            else{
                console.log("Erreur");
                console.log(code);
            }
        };
    }]);