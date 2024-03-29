/* direct-asia : 0.0.0 : Thu Jul 09 2015 15:47:23 GMT+0800 (CST) */

/*

TESTING ONLY - can be deleted before production

This function simply mocks data that would be returned
from a back-end API. Data should include:

- car details
- optional benefit details
- chosen policy details
- main driver details
 */
var getMockData;

getMockData = function() {
  var data;
  return data = {
    car: {
      year: "2013",
      make: "Nissan",
      model: "Micra",
      modified: true,
      modifications: {
        airintakeexhaust: false,
        bodykit: true,
        rimstires: true,
        suspensionstabiliser: false
      },
      ownership: "private",
      financed: false,
      kmsperyear: "> 15,000",
      lowmileageoption: true,
      usage: "personal use"
    },
    cover: [
      {
        name: "Loss of use",
        description: "S$50 to help you with transport costs while your car is being repaired",
        cost: 156
      }, {
        name: "My workshop / garage",
        description: "Gives you the freedom to select your own preferred workshop for an optional benefit",
        cost: 156
      }, {
        name: "Experienced Drivers",
        description: "Cover anyone over 30 with more than 2 years driving experience",
        cost: 156
      }
    ],
    policy: {
      covers: ["Third Party - Death or Bodily injury", "Third Party - Property Damage", "Third Party - Collision Damage", "24 hour accident towing", "Own damage - No Other Vehicle Involved", "Windscreen/Window Breakage"],
      excess: "500",
      name: "Comprehensive Premium",
      number: "2332434535t66",
      savings: "167",
      total: "1356"
    },
    mainDriver: {
      ownership: true,
      dob: {
        day: 25,
        month: 3,
        year: 1983
      },
      age: 32,
      gender: "Female",
      maritalStatus: "single",
      occupation: "web developer",
      residentialDistrict: "PanLong Qu",
      drivingExperience: "more than 5",
      noClaimsDiscount: "30%",
      offences: false,
      refusals: false,
      accidents: {
        atFault: "1",
        notAtFault: "0"
      },
      additionalDrivers: false
    }
  };
};


/*
The controller ties together the view with the model.

In this case the view is the partials/choose-your-cover/choose-your-cover file and the main model
is the $scope.coverDetails variable.
 */

angular.module("DirectAsia").controller("thankYouCtrl", [
  "$scope", function($scope) {

    /*
    		This private function fetches data from the back-end to be used on the page
    
    		(NOTE: This isn't used currently as the data is mocked by the
    		function getMockData() above)
     */
    var getDataFromAPI, setupData;
    getDataFromAPI = function() {
      var dataFromAPI;
      dataFromAPI = {};
      $http.get("http://api-url?lang=" + $rootScope.currentLanguage).success(function(data, status, headers, config) {
        return dataFromAPI = data;
      }).error(function(data, status, headers, config) {
        return console.error(data);
      });
      return dataFromAPI;
    };
    setupData = function(data) {
      return $scope.summary = data;
    };

    /*
    		setupData(getDataFromAPI());
     */
    return setupData(getMockData());
  }
]);
