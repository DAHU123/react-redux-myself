import React, { Component } from 'react';
import { observable } from "mobx";

export default class PracticeMob extends Component{
    id = Math.random();
    @observable title = "";
    @observable finished = false;

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    render(){
        return (<div>PracticeMob</div>)
    }
}

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 {/* 一大段内容 */}
//                 <Observer>{() => <div>{this.props.person.name}</div>}</Observer>
//                 {/* 一大段内容 */}
//             </div>
//         )
//     }
// }
//
// const person = observable({ name: "John" })
//
// React.render(<App person={person} />, document.body)
// person.name = "Mike"
