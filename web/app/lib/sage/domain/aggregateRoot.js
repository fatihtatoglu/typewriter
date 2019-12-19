goog.provide("sage.domain.aggregateRoot");

goog.require("goog.array");
goog.require("sage.domain.entity");

/**
 * @param {string} id
 * @param {Array<sage.domain.domainEvent>=} opt_events
 * @constructor
 */
sage.domain.aggregateRoot = function (id, opt_events) {
    sage.domain.aggregateRoot.base(this, "constructor", id);

    /**
     * @type {Array<sage.domain.domainEvent>=}
     * @private
     */
    this.events_ = [];

    this.pipeline_ = sage.getRegistry("pipeline");
};
goog.inherits(sage.domain.aggregateRoot, sage.domain.entity);

/**
 * @return {Array<sage.domain.domainEvent>=}
 */
sage.domain.aggregateRoot.prototype.getUncommitedChanges = function () {
    return this.events_;
};

sage.domain.aggregateRoot.prototype.commit = function () {
    goog.array.clear(this.events_);
};

/**
 * @param {sage.domain.domainEvent} event
 * @protected
 */
sage.domain.aggregateRoot.prototype.raiseEvent = function (event) {
    goog.array.insert(this.events_, event);

    this.pipeline_.dispatchEvent(event);
};

/**
 * @private
 */
sage.domain.aggregateRoot.prototype.loadFromHistory_ = function (events) {

    var that = this;
    goog.array.forEach(events, function (event) {
        that.when(event);
    });
};