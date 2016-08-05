/**
 * Created by stefan.wang on 8/5/2016.
 */

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

import ListStore from '../stores/ListStore'

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = AppDispatcher;