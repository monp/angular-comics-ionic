'use strict';

angular.module('comicsApp', ['ionic', 'comicsApp.controllers', 'comicsApp.services'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    // Attention, Ionic 1 utilise AngularUI Router
    // Plus d'information ici: https://github.com/angular-ui/ui-router
    $stateProvider
      .state('nav', {
        url: '/tab',
        abstract: true, 
        templateUrl: 'templates/tabs.html'
      })
      .state('nav.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html'
          }
        }
      })
      .state('nav.about', {
        url: '/about',
        views: {
          'tab-about': {
            templateUrl: 'templates/tab-about.html'
          }
        }
      });
    // Redirection vers la vue par défaut
    $urlRouterProvider.otherwise('/tab/home');
});
