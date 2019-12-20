goog.provide("sage.domain.valueObject");

/**
 * @constructor
 */
sage.domain.valueObject = function () { };

/**
 * @abstract
 */
sage.domain.valueObject.prototype.equals = goog.abstractMethod;