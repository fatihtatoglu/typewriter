goog.provide("sage.domain.entity");

goog.require("sage");

/**
 * @param {string} id
 * @constructor
 */
sage.domain.entity = function (id) {
    /**
     * @type {string}
     * @private
     */
    this.id_ = id;
};

/**
 * @return {string}
 */
sage.domain.entity.prototype.getId = function () {
    return this.id_;
};