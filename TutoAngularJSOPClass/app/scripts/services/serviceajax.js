'use strict';

/**
 * @ngdoc service
 * @name cineAngularApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineAngularApp.
 */
angular.module("cineAngularApp")
        .factory('serviceAjax', function serviceAjax($http) {
            // Service logic
            // ...

            var meaningOfLife = 42;

            // Public API here
            return {
                search: function (query, page) {
                    return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
                },
                info: function (id) {
                    return $http.get("http://localhost:3000/info/" + id);
                },
                popular: function (page) {
                    return $http.get("http://localhost:3000/popular?page=" + page);
                },
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
console.log("Fin popular.js");