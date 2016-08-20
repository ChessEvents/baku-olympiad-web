function HomeConfig( $stateProvider ) {
    'ngInject';

    $stateProvider
        .state( 'app.home', {
            url: '/',
            controller: 'HomeController',
            controllerAs: '$controller',
            templateUrl: 'home/home.html',
            title: 'Home'
        } );
}

export default HomeConfig;
