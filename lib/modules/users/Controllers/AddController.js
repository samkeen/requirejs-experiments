/**
 * Created by sam on 10/27/13.
 */
define(['Views/AddView', 'Models/User'], function(AddView, User){

    function start(){
        AddView.render();
        bindEvents();
    }

    function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            /**
             *  When the button is clicked, we get the users string from the local storage,
             *  de-serialize it to get the array, push a new user with the name contained in the
             *  #user-name input field, and put the updated users array back to the local storage
             */
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            window.location.hash = '#list';
        }, false);
    };

    return {
        start:start
    };
});
