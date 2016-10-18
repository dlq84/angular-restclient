angular
    .module('restclient')
    .factory('Mock', MockFactory);

/**
 * @ngInject
 * @class
 */
function MockFactory() {

    /**
     * Abstract mock object in order to mock backend data.
     *
     * @class
     * @example
     * angular.module('UsersMock', [])
     *  .factory('UsersMock', function(Mock) {
     *       angular.extend(UsersMock.prototype, Mock.prototype);
     *
     *       function TestUsersMock() {
     *           // Define routes for this mock with a reference to a method
     *           this.routes({
     *               '[GET]/': this.get
     *           })
     *       }
     *
     *       UsersMock.prototype.get = function() {
     *           return {
     *               users: [
     *                   {
     *                       id: 1,
     *                       firstname: 'Jack',
     *                       lastname: 'Bauer'
     *                   },
     *                   {
     *                       id: 2,
     *                       firstname: 'Sandra',
     *                       lastname: 'Bullock'
     *                   }
     *               ]
     *           }
     *       };
     *
     *       return UsersMock;
     *  }
     * )
     */
    function Mock() {
        /**
         * This object represents all the routes of a mock and is used to match a request to a given method
         *
         * @type {object}
         * @private
         */
        this._routeMatcher = {};
    }

    /**
     * Creates a object representing all the defined routes for a specific mock. Implemented in the constructor of the concrete mock.
     *
     * @param {object} routes All route definition for this mock
     * @protected
     * @abstract
     * @example
     * function TestUsersMock() {
     *      this._routes({
     *          '[GET]/': this.get,
     *          '[GET]/:id': this.getUser,
     *          '[POST]/': this.postUser,
     *          '[POST]/:id/:controller': this.postUserCompany,
     *          '[PUT]/:id': this.putUser
     *      })
     * }
     */
    Mock.prototype._routes = function (routes) {
        this._routeMatcher = {};

        for (var route in routes) {
            this._routeMatcher[route.match(/\[(GET|POST|PUT|DELETE|PATCH|HEAD)\]/)[1] + (route.match(/:/g) || []).length] = routes[route];
        }
    };

    /**
     * Will be called from the endpoint to actually request the mock.
     *
     * @param {string} method The HTTP method as found in the HTTP/1.1 description
     * @param {Array} params All parameters as defined in the route object. Parameters not defined in the route configuration will be requested as query parameters.
     * @param {string} body The HTTP body as described in HTTP/1.1
     * @abstract
     * @returns {*} Defined in the concret mock
     */
    Mock.prototype.request = function (method, params, body) {
        if (!angular.isDefined(params)) params = [];

        var methodName = method + params.length;
        if (angular.isDefined(body)) params.push({body: body});

        return this._routeMatcher[methodName].apply(this, params);
    };

    return Mock;
}