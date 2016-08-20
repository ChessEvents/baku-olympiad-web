class AppFooterController {
    constructor( AppConstants ) {
        'ngInject';
        this.appName = AppConstants.appName;
        this.date = new Date();
    }
}

let AppFooter = {
    controller: AppFooterController,
    controllerAs: '$controller',
    templateUrl: 'layout/footer.html'
};

export default AppFooter;
