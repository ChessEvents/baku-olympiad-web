function AppRun( AppConstants, $rootScope ) {
    'ngInject';

    $rootScope.$on( '$stateChangeSuccess', ( event, toState ) => {
        $rootScope.setPageTitle( toState.title );
    } );

    $rootScope.setPageTitle = title => {
        $rootScope.pageTitle = '';

        if ( title ) {
            $rootScope.pageTitle += title;
            $rootScope.pageTitle += ' \u2016 ';
        }
        $rootScope.pageTitle += AppConstants.appName;
    };

}

export default AppRun;
