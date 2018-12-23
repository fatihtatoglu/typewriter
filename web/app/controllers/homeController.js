goog.provide("Typewriter.controllers.homeController");

/**
 * @constructor
 */
Typewriter.controllers.homeController = function () {
    console.log("home controller");
};

/**
 * Initializes controller.
 */
Typewriter.controllers.homeController.prototype.init = function () {
    console.log("home controller init.");

    var that = this;
    var pnl = document.getElementById("pnlContent");
    var a = document.createElement("a");
    a.addEventListener("click", function () {
        that.history.setToken("order/:id/:source");
    });

    a.href = "javascript:;";
    a.innerHTML = "Sample";
    pnl.appendChild(a);
};

/**
 * The controller on loaded event handler.
 */
Typewriter.controllers.homeController.prototype.onLoad = function () {
    console.log("home controller on loaded.");

    // var that = this;
    // setTimeout(function () {
    //     that.history.setToken("example1");
    // }, 2000);

    // setTimeout(function () {
    //     that.history.setToken("example2");
    // }, 5000);
};