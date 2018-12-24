goog.provide("Typewriter.router");

goog.require("goog.events");
goog.require("goog.structs.Map");
goog.require("goog.History");
goog.require("goog.history.Html5History");

/**
 * @constructor
 */
Typewriter.router = function () {
    this.routes = new goog.structs.Map();
    this.history = goog.history.Html5History.isSupported() ? new goog.history.Html5History() : new goog.History();
};

/**
 * Maps a new route for navigation.
 */
Typewriter.router.prototype.map = function (name, pattern) {
    console.log("route mapped.");

    this.routes.set(name, pattern);
};

Typewriter.router.prototype.init = function () {
    console.log("route init.");

    if (!this.curentRoute) {
        var token = window.location.hash.slice(1) || "/";
        console.log(token);

        var routingFunc = this.routes.get(token);
        routingFunc.apply(this);
    }

    goog.events.listen(this.history, goog.history.EventType.NAVIGATE, goog.partial(this._pageChangedEventHandler, this));
};

Typewriter.router.prototype._pageChangedEventHandler = function (app, e) {
    console.log("page changed.", e);
};