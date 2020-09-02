import React, { Component } from 'react'
export default class Useeffect extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
//初次渲染
    componentDidMount() {
        console.log(`componentDidMount-----${this.state.count}`)
    }
    // 初次渲染完成之后,
    componentDidUpdate(){
        console.log(`componentDidUpdate-----${this.state.count}`)
    }
    render() {
        return (
            <div>
                <h1>-----------------类的生命周期函数 </h1>
                <div>
                    点击{this.state.count}
                </div>
                <button onClick={this.addClick}>点击增加</button>
            </div>
        );
    }
    addClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
}