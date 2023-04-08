'use strict';

angular.module('adopt')
    .controller('adoptController', ['$http', '$stateParams', function ($http, $stateParams) {
        var self = this;


        $http.get('api/customer/petTypes').then(function (resp) {
            self.types = resp.data ? resp.data : ["dog"];
        })

         self.submit = function () {
                    var id = self.pet.id || 0;

                    var data = {
                        id: id,
                        name: self.pet.name,
                        birthDate: self.pet.birthDate,
                        typeId: self.petTypeId
                    };



                    var  req = $http.post("api/customer/pet", data);


                    req.then(function () {
                        //$state.go("owners", {ownerId: ownerId});
                    }, function (response) {
                        var error = response.data;
                        error.errors = error.errors || [];
                        alert(error.error + "\r\n" + error.errors.map(function (e) {
                                return e.field + ": " + e.defaultMessage;
                            }).join("\r\n"));
                    });
                };

    }]);
