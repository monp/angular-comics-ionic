'use strict';

angular.module('comicsApp.services', [])
  .service('configService', function() {
    this.apiKey = function() {
        return 'YOUR_API_KEY_HERE';
    };
  })
  .service('comicsService', ['$resource', 'baseURL', 'configService', function($resource, baseURL, configService) {
    this.getComics = function() {
      return $resource(baseURL + '/v1/public/comics', { 'limit': 50, 'apikey': configService.apiKey });
    };
  }]);
