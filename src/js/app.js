// Custom functions
(function() {
    "use strict";

    // Page specific actions
    var MYSITE = {
        common: { // sitewide code
            init: function() {

                // Do common stuff here

            }
        },

        Page: {
            init: function() {// controller-wide code

                // Do Page specific stuff here

            }
        }


    };


    var UTIL = {
        exec: function(controller, action) {
            var ns      = MYSITE,
                action  = (action === undefined) ? 'init' : action;
            if (controller !== '' && ns[controller] && typeof ns[controller][action] == 'function' ) {
                ns[controller][action]();
            }
        },

        init: function() {
            var main        = document.getElementById('main'),
                controller  = main.getAttribute( 'data-controller' ),
                action      = main.getAttribute( 'data-action' );
            UTIL.exec( 'common' );
            UTIL.exec( controller );
            UTIL.exec( controller, action );
        }
    };

    window.onload = UTIL.init;

})();