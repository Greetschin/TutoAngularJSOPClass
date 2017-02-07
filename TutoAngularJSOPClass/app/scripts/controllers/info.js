'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
        var id = $routeParams.id;
        serviceAjax.info(id).success(function(data){
            $scope.movie = data;
        })
  });
