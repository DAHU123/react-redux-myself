import React, { Component } from 'react';
import { Dropdown, Menu, Icon, message } from 'antd'
import AutoSuggest from 'lili-react-tiny-autosuggest'
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
        // var add = x => (y => x + y);
        // var increment = add(1);
        // var addTen = add(10);
        // console.log(increment(2))  // 3
        // console.log(addTen(2));;  // 12
/******************************************************************/
        // 函数组合
        // const compose = (f, g) => (x => f(g(x)));
        // var toUpperCase = word => word.toUpperCase();
        // var split = x => (str => str.split(x));
        // var f = compose(split(' '), toUpperCase);
        // console.log(f("abcd efgh"));;


        let thenable = {
            then: function(resolve, reject) {
                resolve(42);
            }
        };
        let p1 = Promise.resolve(thenable);
        p1.then(function(value) {
            // console.log(value); // 42
        });
    }
    selectDrop = (option) => {
        message.info('你选择了||你填写了:'+option)
    }
    render() {
        let arr = [ 'JS', 'JavaScript', 'JayShow', 'Jolin' ]
        return this.props.isFetching ? (<h1>Loading…</h1>) : (
            <ul className="goods">
                <div>this is my Practice</div>
                <AutoSuggest placeholder='请输入内容' suggestions={arr} onSelect={this.selectDrop}></AutoSuggest>
                <Dropdown overlay={menu}>
                    <sapn className="ant-dropdown-link">
                        Hover me <Icon type="down" />
                    </sapn>
                </Dropdown>
            </ul>
        );
    }
}

class Point{
    constructor(x, y){
        //Point这个类上拥有的一些属性
        this.x = x;
        this.y = y;
    }
    //在Point这个类的原型上添加方法
    sayWrods(){
        return this.x + '**' + this.y
    }
    //函数前面添加一个static关键字,表明这个是一个静态方法,不会被实例继承,只能通过类来调用.
    static sayHello(){
        return this.x + '**' + this.y
    }
}

class Two extends Point{
    constructor(){
        super()
        this.x=8
    }
}

let a = new Point(3,4)
/*
* 类和模块中默认使用的就是严格模式
*
* a是由Point这个类实例化出来的对象,
* 是Point的对象实例,当执行new命令创建a时,会自动调用Point的constructor方法,
* 一个类必须有constructor方法,如果没有显式定义,一个默认的constructor方法会被默认添加,
* 所以即使一个类,你没有添加constructor这个构造函数,也是会有一个默认的构造函数的.
* 一般的constructor方法返回实例对象this,但是也可以指定constructor方法返回一个全新的对象,让返回的实例对象不是该类的实例.
* 在constructor中的this指的是实例对象
*
* */
let b = new Two()
// console.log(a);
console.log(b);

class D{
    constructor(age,email){
        this.age=age
        this.email=email
    }
    static test(){
        console.log(10)
    }
    say(){
        console.log('D'+this.age)
    }
}
/*
* 子类必须在constructor方法中调用super方法,否则新建实例时会报错,
*
* */

class E extends D{
    constructor(age,email,weight){
        super(age+'E',email+'E')//这里的super指向的是父类
        this.weight=weight
    }
}
let e1=new E(10,'100@qq.com',100)
console.log(e1)//E {age: "10E", email: "100@qq.comE", weight: 100}
E.test()//10,说明父类的静态方法可以被子类继承；但同理实例对象无法访问
// e1.test()//报错
// e1.say()

