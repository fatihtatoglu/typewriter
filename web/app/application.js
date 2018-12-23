goog.provide("Typewriter.application");

goog.require("goog.events");
goog.require("goog.events.EventTarget");
goog.require("goog.History");
goog.require("goog.history.Html5History");
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

    var that = this;
    this.router.map("/", function () {
        var controller = new Typewriter.controllers.homeController();
        controller.init();
        controller.onLoad();
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

    //goog.events.listen(this.history, goog.history.EventType.NAVIGATE, goog.partial(this._pageChangedEventHandler, this));
};

/**
 * Runs the typewriter application.
 */
Typewriter.application.prototype.run = function () {
    console.log("application run.");

    this.pipeline.dispatchEvent("application-run");
};

/**
 * The page changed event handler.
 * @param {!typewriter.application} app
 * @param {goog.events.Event} e
 * @private
 */
Typewriter.application.prototype._pageChangedEventHandler = function (app, e) {

    var url = window.location.hash.slice(1) || "/";

    console.log(url);
    console.log(e);
};

/**
 * Typewriter global registry.
 */
Typewriter.registry = new goog.structs.Map();