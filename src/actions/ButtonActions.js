/**
 * Created by stefan.wang on 8/5/2016.
 */
import AppDispatcher from '../dispatcher/AppDispatcher'

// 该对象用来定义和存放所有的Action
var ButtonActions = {
    addNewItem: function (text) {
        // 使用AppDispatcher，把动作ADD_NEW_ITEM派发到Store
        AppDispatcher.dispatch({
            actionType: "ADD_NEW_ITEM",
            text: text
        });
    }
};

module.exports = ButtonActions;