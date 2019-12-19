goog.provide("sage");

/**
 * @constant
 */
var sage = (function () {

    var _registry = {};

    function set(key, value) {
        _registry[key] = value;
    };

    function get(key) {
        if (_registry[key]) {
            return _registry[key];
        }
    }

    return {
        getRegistry: get,
        setRegistry: set
    };
}());