class AppHeaderController {
    constructor( AppConstants, $scope ) {
        'ngInject';

        this.appName = AppConstants.appName;
    }
}

let AppHeader = {
    controller: AppHeaderController,
    controllerAs: '$controller',
    templateUrl: 'layout/header.html'
};

export default AppHeader;
