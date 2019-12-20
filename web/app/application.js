goog.provide("Typewriter.application");

goog.require("goog.events");
goog.require("goog.events.EventTarget");

goog.require("Typewriter.router");
goog.require("Typewriter.controllers.homeController");

goog.require("sage");

/**
 * The typewriter application.
 * @constructor
 */
Typewriter.application = function () {

    /**
     * @type {goog.events.EventTarget}
     * @private
     */
    this.pipeline_ = new goog.events.EventTarget();
    sage.registry.set("pipeline", this.pipeline_);

    this.router = new Typewriter.router();
};

/**
 * Initializes the typewriter application.
 */
Typewriter.application.prototype.init = function () {
    console.log("application init.");

    this.router.map("default", "{controller}/{action}/{id}", {
        "controller": "home",
        "action": "index"
    });

    this.router.init();

    this.pipeline_.dispatchEvent("application-init");
};

/**
 * Loads the application configuration.
 */
Typewriter.application.prototype.loadConfig = function () {
    console.log("application load config.");
};

/**
 * Registers global events.
 */
Typewriter.application.prototype.registerGlobalEvents = function () {
    console.log("application register global events.");
};

/**
 * Runs the typewriter application.
 */
Typewriter.application.prototype.run = function () {
    console.log("application run.");

    this.pipeline_.dispatchEvent("application-run");
};