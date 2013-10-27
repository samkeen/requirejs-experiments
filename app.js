require.config({
    paths: {
        // override jquery path to google CDN
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        // shorten `lib/underscore` path to 'underscore'
        "underscore": "lib/underscore"
    }
});

require(['lib/modules/template'], function(template) {
    template.showName("Jack");
});