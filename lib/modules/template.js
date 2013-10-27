/**
 * Created by sam on 10/27/13.
 */
define(['underscore', 'jquery'], function() {

    var showName = function(n) {
        var temp = _.template("Hellow <%= name %>");
        $("body").html(temp({name: n}));
    }
    /**
     * return an object containing properties that are the methods to expose
     */
    return {
        showName: showName
    };
});
