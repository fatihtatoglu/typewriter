goog.provide("Typewriter.application");

goog.require("goog.events");
goog.require("goog.events.EventTarget");
goog.require("goog.structs.Map");

goog.require("Typewriter.router");
goog.require("Typewriter.controllers.homeController");

/**
 * The typewriter application.
 * @constructor
 */
Typewriter.application = function () {
    this.pipeline = new goog.events.EventTarget();
    this.router = new Typewriter.router();
};

/**
 * Initializes the typewriter application.
 */
Typewriter.application.prototype.init = function () {
    console.log("application init.");

    Typewriter.registry.set("pipeline", this.pipeline);

    this.router.map("defaulr", "{controller}/{action}/{id}", {
        "controller": "home",
        "action": "index"
    });

    this.router.init();

    this.pipeline.dispatchEvent("application-init");
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

    this.pipeline.dispatchEvent("application-run");
};

/**
 * Typewriter global registry.
 */
Typewriter.registry = new goog.structs.Map();