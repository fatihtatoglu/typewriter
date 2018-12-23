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
    this.curentRoute = "";
};

/**
 * Maps a new route for navigation.
 */
Typewriter.router.prototype.map = function (token, route) {
    console.log("route mapped.");

    this.routes.set(token, route);
};

Typewriter.router.prototype.init = function () {
    console.log("route init.");

    if (this.curentRoute === "") {
        var token = window.location.hash.slice(1) || "/";
        console.log(token);

        var routeFunc = this.routes.get(token);
        routeFunc();
    }

    goog.events.listen(this.history, goog.history.EventType.NAVIGATE, goog.partial(this._pageChangedEventHandler, this));
};

Typewriter.router.prototype._pageChangedEventHandler = function (app, e) {
    console.log("page changed.");




    console.log(e);
};