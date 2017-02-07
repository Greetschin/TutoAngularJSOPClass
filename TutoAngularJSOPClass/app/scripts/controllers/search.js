'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
        .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
            $scope.query = $routeParams.query;
            $scope.currentPage = 1;
            $scope.totalPages = 0;
            $scope.loading = true;
            $scope.orderByPredicate = "title";
            $scope.orderByReverse = false;

            var loadMovies = function () {
                $scope.loading = true;
                serviceAjax.search($scope.query, $scope.currentPage).success(function (data) {
                    $scope.loading = false;
                    $scope.movies = data.results;
                    $scope.totalPages = data.total_pages;
                    $scope.loading = false;
                });
            };

            $scope.pageChanged = function () {
                loadMovies();
            };
            $scope.clickPredicateName = function () {
                $scope.orderByReverse = !$scope.orderByReverse;
                $scope.orderByPredicate = 'title';
            }

            $scope.clickPredicateRate = function () {
                $scope.orderByReverse = !$scope.orderByReverse;
                $scope.orderByPredicate = 'vote_average';
            }

            loadMovies();
        });
console.log("Fin Search.js");