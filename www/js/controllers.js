'use strict';

angular.module('comicsApp.controllers', [])
  .controller('comicsController', ['$scope', 'comicsService', function($scope, comicsService) {
    comicsService.getComics().get(
      function(response) {
        $scope.comics = response.data.results;
      }
    );
  }])
  .controller('comicController', ['$scope', '$stateParams', 'comicsService', function($scope, $stateParams, comicsService) {
    $scope.$on('$ionicView.enter', function(e) { // invalide le cache de la vue (permet de rafraichir le titre)
      comicsService.getComic($stateParams.comicId).get(
        function(response) {
          $scope.comic = response.data.results[0];
        }
      );
    });
  }]);