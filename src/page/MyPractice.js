import React, { Component } from 'react';
import { Dropdown, Menu, Icon } from 'antd'
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);
export default class MyPractice extends Component {
    componentDidMount() {
        // 这个是ES5的写法
        // var add = function(x) {
        //     return function(y) {
        //         return x + y;
        //     };
        // };
        //es6写法
        var add = x => (y => x + y);
        var increment = add(1);
        var addTen = add(10);
        console.log(increment(2))  // 3
        console.log(addTen(2));;  // 12
    }

    render() {
        return this.props.isFetching ? (<h1>Loading…</h1>) : (
            <ul className="goods">
                <div>this is my Practice</div>

                <Dropdown overlay={menu}>
                    <sapn className="ant-dropdown-link">
                        Hover me <Icon type="down" />
                    </sapn>
                </Dropdown>
            </ul>
        );
    }
}
