
angular.module('ngStatus', [])
  .factory('getStatus', ['$http', function($http) {
    var USER_STATUS_PATTERN = "http://www.epixhd.com/epx/ajax/user/status/";

    // refresh();
    return refresh();
    function refresh() {
      // $http({method: 'GET', url: USER_STATUS_PATTERN}).
      // success(function(data, status, headers, config) {
      //   console.log("success",data, status, headers, config);
      // }).
      // error(function(data, status, headers, config) {
      //   console.log("error",data, status, headers, config);
      // });

      // OR

      // var url = USER_STATUS_PATTERN;
      // return $http.jsonp(url).success(function(data) {
      //   // console.log(data);
      // });

      var user_logged_in =  {
          epixsessref: 1952475,
          loggedin: true,
          msostatus: {
            authenticated: 1,
            status_msg: "Congratulations! You've got a valid Free Trial and can now watch Movies",
            msoName: "inviteCodes",
            origin: "www.",
            authenticatedMsoID: 6,
            associated: true,
            productGroups: {
              1: "ALL MOVIES"
            },
            is_coupon_user: true
          },
          authorized: true,
          hasprofile: true,
          rating: false,
          redirect_to: false
        }

        user_logged_out = {
          loggedin: false,
          hasprofile: false,
          authorized: false,
          msostatus: {
            associated: false,
            authenticated: false
          },
          redirect_to: false
        }

        return user_logged_out;
      
    }
  }]);