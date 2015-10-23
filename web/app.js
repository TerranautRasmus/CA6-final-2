var app = angular.module('Problem2App', ['ngRoute']);

// Route provider start ('Switch-case')
app.config(function ($routeProvider) {
    $routeProvider
            .when("/home", {
                templateUrl: "views/home.html",
                controller: "PersonsController"
            })
            .when("/AllPersons", {
                templateUrl: "views/allPersons.html",
                controller: "PersonsController"
            })
            .when("/details/:id", {
                templateUrl: "views/details.html",
                controller: "PersonsController"
            })
            .when("/NewPerson", {
                templateUrl: "views/newPerson.html",
                controller: "PersonsController"
            })
            .otherwise({
                redirectTo: '/home'
            });
});
// Route provider end

var persons = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];


// Controller initialisering


app.controller('PersonsController', ["$routeParams", function ($routeParams) {
        var self = this;

        
        self.title = ""; // opr. Persons
        self.persons = persons;

// Start id = id fra persons +1, så den er klar til en ny person. Ved indsættelse af person tælles den automatisk op.
        var startId = 4;

// Sætter data ind i objekt-listen
        if (angular.isDefined($routeParams.id)) {
            var y = $routeParams.id;
            for (var i in self.persons) {
                if (self.persons[i].id == y) {
                    self.detailPerson = self.persons[i];
                }
            }
        }


        // Add person
        self.add = function () {
            if (self.newPerson.id == null) {
                self.newPerson.id = startId;
                startId++;
                self.persons.push(self.newPerson);
            } else {
                for (var i in self.persons) {
                    if (self.person[i].id === self.newPerson.id) {
                        self.person[i] = self.newPerson;
                    }
                }
            }

            self.newPerson = {};
        };
    }]);