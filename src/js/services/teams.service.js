class Teams {
    constructor( AppConstants, $http, $q ) {
        'ngInject';
        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    getAll() {
        return this._$http( {
            url: this._AppConstants.api + '/teams',
            method: 'GET'
        } ).then( res => res.data.teams );
    }

    getMostRecent( num ) {
        return this._$http( {
            url: this._AppConstants.api + '/teams/:num',
            params: num,
            method: 'GET'
        } ).then( res => res.data.teams );
    }

    getLeaders( num ) {
        return this._$http( {
            url: this._AppConstants.api + '/teams/leaders/:num',
            params: num,
            method: 'GET'
        } ).then( res => res.data.teams );
    }

}

export default Teams;
