var app = angular.module('acantilado', ['ngRoute', 'acantilado.controllers']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/libros', { controller: 'librosCTRL', templateUrl: 'views/libros.html' })
        .when('/autor/:id', { controller: 'autorCTRL', templateUrl: 'views/autor.html' })
        .otherwise({ redirectTo: '/libros' })
});
