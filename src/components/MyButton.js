/**
 * Created by stefan.wang on 8/5/2016.
 */
import React from 'react'

export default class MyButton extends React.Component {
    render() {
        let itemList = this.props.items.map(function (item, i) {
            return (
                <li key={i}>{item}</li>
            );
        });
        return (
            <div>
                <ul>{itemList}</ul>
                <button onClick={this.props.onClick}>New Item</button>
            </div>
        );
    }
}