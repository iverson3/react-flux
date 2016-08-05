/**
 * Created by stefan.wang on 8/5/2016.
 */
import React from 'react'
import ListStore from '../stores/ListStore'
import ButtonActions from '../actions/ButtonActions'
import MyButton from './MyButton'

export default class MyButtonController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ListStore.getAll()
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        // 注册对change事件的监听
        ListStore.addChangeListener(this._onChange);
    }

    componentWillUnMount() {
        // 移除对change事件的监听
        ListStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        // 更新组件状态，从而触发重新渲染
        this.setState({
            items: ListStore.getAll()
        });
    }

    createNewItem(e) {
        // 触发名为addNewItem的Action
        ButtonActions.addNewItem('new item');
    }

    render() {
        return (
            <MyButton items={this.state.items} onClick={this.createNewItem.bind(this)} />
        );
    }
}