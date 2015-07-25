angular.module("versionableDemo", [])
  .config(["$sceDelegateProvider", function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['https://cdn.rawgit.com/**', 'file://**']);
  }]).controller("LoginCtrl",
              ["LoginService", function(LoginService) {
                var lc = this;
                lc.submit = function(username, password) {
                  LoginService.doLogin(username, password)
                    .then(function() {
                      lc.result = "It worked!"
                      lc.failed = false; 

                    })
                    .catch(function() {
                      lc.result = "It failed!"
                      lc.failed = true; 
                    });
                };
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
