goog.provide("sage.domain.aggregateRoot");

goog.require("goog.array");
goog.require("sage");
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
    this.uncommittedEvents_ = [];

    /**
     * @type {goog.events.EventTarget}
     * @private
     */
    this.pipeline_ = sage.registry.get("pipeline");

    this.loadFromHistory_(opt_events || []);
};
goog.inherits(sage.domain.aggregateRoot, sage.domain.entity);

/**
 * @return {Array<sage.domain.domainEvent>=}
 */
sage.domain.aggregateRoot.prototype.getUncommitedChanges = function () {
    return this.uncommittedEvents_;
};

sage.domain.aggregateRoot.prototype.commit = function () {
    goog.array.clear(this.uncommittedEvents_);
};

/**
 * @param {sage.domain.domainEvent} event
 * @protected
 */
sage.domain.aggregateRoot.prototype.raiseEvent = function (event) {
    this.uncommittedEvents_.push(event);
    this.pipeline_.dispatchEvent(event);
};

/**
 * @param {Array<sage.domain.domainEvent>} events
 * @private
 */
sage.domain.aggregateRoot.prototype.loadFromHistory_ = function (events) {
    var that = this;
    goog.array.forEach(events, function (event) {
        that.when(event);
    });
};