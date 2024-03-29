'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineAngularApp
 */
angular.module("cineAngularApp")
        .controller('PopularCtrl', function ($scope, serviceAjax) {
            $scope.currentPage = 1;
            $scope.totalPages = 0;
            $scope.loading = true;
            $scope.orderByPredicate = "title";
            $scope.orderByReverse = false;

            var loadMovies = function () {
                $scope.loading = true;
                serviceAjax.popular($scope.currentPage).success(function (data) {
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
            };

            $scope.clickPredicateRate = function () {
                $scope.orderByReverse = !$scope.orderByReverse;
                $scope.orderByPredicate = 'vote_average';
            };
            loadMovies();
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
console.log("Fin popular.js");