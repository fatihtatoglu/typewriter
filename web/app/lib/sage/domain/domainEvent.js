goog.provide("sage.domain.domainEvent");

/**
 * @constructor
 */
sage.domain.domainEvent = function () {

    /**
     * @type {Number}
     * @private
     */
    this.timestamp_ = Date.now();
};

/**
 * @return {Number}
 */
sage.domain.domainEvent.prototype.getTimestamp = function () {
    return this.timestamp_;
};