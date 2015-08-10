var sample = [];
var response = [];
var spinner = true;
var re = /[a-zA-Z0-9]+@[u,w,o]+.[c,a]/;

// config
// Status and Checked are mandatory fields
var config = ["Name", "Email", "Address", "Status", "Checked"];


function regexTest(re, str){
  if (re.test(str)) {
    return true;
  }else {
    return false;
  }
};

var gitlabController = angular.module("gitlabController", []);
gitlabController.controller('homeCtrl', ['$scope','$http', '$timeout',
  function ($scope, $http, $timeout) {
    function handleFileSelect(evt) {
        var file = evt.target.files[0];
        Papa.parse(file, {
          header: true,
          dynamicTyping: true,
          complete: function(results) {
            for(var i=0;i<results.data.length; i++){
              var str = results.data[i].Email;
              var pos = str.indexOf("@")
              var Name = str.slice(0, pos);
              results.data[i].Name = Name;
              if(regexTest(re, results.data[i].Email)){
                results.data[i].Status = 'valid';
              }else {
                results.data[i].Status ='Invalid';
              }
              results.data[i].Checked = true;
            }
            for(var i=0;i<results.data.length; i++){
              var obj = {};
              for ( var j=0; j<config.length; j++){
                if(results.data[i].hasOwnProperty(config[j])){
                  obj[config[j]] = results.data[i][config[j]];
                }
              }
              sample.push(obj);
            }
            console.log(sample);
            }
        });
      }

      $(document).ready(function(){
        $("#csv-file").change(handleFileSelect);
      });

      $scope.data = sample;
      $scope.loading = true;


      // Validate csv file and create new users
      $scope.create = function(){
          $http.post('http://localhost:3000/gitlab/user/create',{data:JSON.stringify(sample)}, {headers: {'Content-Type': 'application/json'}}).
            success(function(data) {
              response = JSON.parse(data);
              console.log(response);
            }).
            error(function(data) {
              //error handler
            });
      };
      setTimeout(function(){
        $scope.loading = false;
        $scope.users = response;
        $scope.$apply();
      }, 4000);
  }]);
