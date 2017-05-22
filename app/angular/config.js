/**
 * Created by Edward NANDA on 17/02/2017.
 */

config.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise( '/accueil');

    $stateProvider
        .state('accueil',{
            url:"/accueil",
            title:"accueil",
            views:{
                '':{
                    templateUrl: template_url + 'index.html'
                },
                'header@accueil': {
                    templateUrl: template_url + 'static/header.html',
                    controller: "HeaderCtrl"
                },
                'body@accueil': {
                    templateUrl: template_url+'accueil/content.html',
                    controller:'AccueilCtrl'
                },
                'footer@accueil': {
                    templateUrl: template_url+'static/footer.html',
                    controller:"FooterCtrl"
                }
            }
        })
}]);