// Custom functions
(function() {
    "use strict";

    // Page specific actions
    const MYSITE = {
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


    const UTIL = {
        exec: function(controller, action) {
            let namespace = MYSITE;
            action = (action === undefined) ? 'init' : action;
            if (controller !== '' && namespace[controller] && typeof namespace[controller][action] == 'function' ) {
                namespace[controller][action]();
            }
        },
        init: function() {
            let elm = document.getElementById('main');
            let controller = elm.getAttribute( 'data-controller' );
            let action = elm.getAttribute( 'data-action' );
            UTIL.exec( 'common' );
            UTIL.exec( controller );
            UTIL.exec( controller, action );
        }
    };

    window.onload = UTIL.init;

})();