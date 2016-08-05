/**
 * Created by stefan.wang on 8/5/2016.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// 继承EventEmitter.prototype
// 因此可以使用EventEmitter提供的on()和emit() 来监听和触发事件
var ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    addNewItemHandler: function (text) {
        this.items.push(text);
    },

    // 触发change事件
    emitChange: function () {
        this.emit("change");
    },

    // 添加对change事件的监听
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    // 移除对change事件的监听
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

module.exports = ListStore;