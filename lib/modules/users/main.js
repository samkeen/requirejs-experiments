/**
 * Created by sam on 10/27/13.
 * Initially created from tutorial at:
 * See: http://verekia.com/requirejs/build-simple-client-side-mvc-app-require-js
 */
//require(['MyMath'], function(MyMath){
//
//    console.log(MyMath.add(1, 2));
//
//});
require(['Models/User', 'Router'], function(User, Router){
    var users = [
        new User('Bob'),
        new User('Ted'),
        new User('Ed')
    ];
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
    localStorage.users = JSON.stringify(users);
    Router.startRouting();
});
