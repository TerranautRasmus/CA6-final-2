<!DOCTYPE html>
<html ng-app="Problem2App" ng-controller="PersonsController as ctrl">
    <head lang="en">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
        <script src="js/angular.min.js" type="text/javascript"></script>
        <script src="js/angular-route.js" type="text/javascript"></script>
        <script src="app.js"></script>
        <meta charset="UTF-8">
        <title>{{ctrl.title}}</title>
    </head>
    <body>
        <div class="navbar navbar-default">
            <div class="container-fluid col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">{{ctrl.title}}</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#/AllPersons">All persons</a></li>
                        <li><a href="#/NewPerson">New person</a></li>
                    </ul>
                </div>
            </div>
        </div>
<!-- Det 'tomme' view med nogle size og offset (kolonner) -->
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1" ng-view="myView"></div>
    </body>
</html>
