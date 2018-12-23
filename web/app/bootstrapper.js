goog.provide("Typewriter.boot");

goog.require("Typewriter.application");

/**
 * Typewriter application boot strapper.
 * @constructor
 */
Typewriter.boot = function () {
    console.log("application boot.");

    var app = new Typewriter.application();
    app.init();
    app.loadConfig();
    app.registerGlobalEvents();
    app.run();
};

goog.exportSymbol("Typewriter.boot", Typewriter.boot);