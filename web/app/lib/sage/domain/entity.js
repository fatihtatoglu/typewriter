goog.provide("sage.domain.entity");

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

/**
 * @param {string} id
 * @return {boolean}
 */
sage.domain.entity.prototype.equals = function (id) {
    return this.id_ === id;
};