angular.module("versionableDemo", [])
  .controller("LoginCtrl",
              ["LoginService", function(LoginService) {
                var lc = this;
                
                
              }])
  .factory("LoginService", function($q) {
    return {
      doLogin : function(username, password) {
        return $q(function(resolve, reject) {
          if (username === 'admin') {
            resolve();
          } else {
            reject();
          }
        });
      }
    };
  })
;
