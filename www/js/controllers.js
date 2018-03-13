'use strict';

angular.module('comicsApp.controllers', [])
  .controller('comicsController', ['$scope', 'comicsService', function($scope, comicsService) {
    comicsService.getComics().get(
      function(response) {
        $scope.comics = response.data.results;
      }
    );
  }]);