/**
 * Created by sam on 10/27/13.
 * @TODO implement https://github.com/janl/mustache.js rather than hardcoded HTML here.
 */
define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
    }

    return {
        render:render
    };
});
