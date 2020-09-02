//1、引入useEffect 
import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
/**
 * 方法  在useEffect函数中可以代替不同生命周期函数
 */
// 第二个参数数组
function Index(){
    useEffect(()=>{
        console.log(`useEffect--进入index-------`)
        //解绑 
        return ()=>{
            console.log('出index页面')
        } 
    },)
    return <h2>lalla1</h2>

}
function Index2(){
    useEffect(()=>{
        console.log(`useEffect--进入index2-------`)
    })
    return <h2>2222222222</h2>

}
function Useeffect2() {
    // 声明 ，读取，使用  
    /*左侧 数组解构 count变量   setcount函数 接收将要改变的状态
     * 右侧useState()方法里接收初始值 
     */
    const [count, setCount] = useState(0);
    // useEffect代替生命周期函数
    // useEffect(()=>{
    //     console.log(`useEffect-------${count}`)
    // })
    // 正常写法
    // let _useState=userState(0)
    // let count=_useState[0]
    // let setState=_useState[1]
    return (
        <div>
            <h1>-------useEffect替代ComponentWillUnmont</h1>
       
         
          {/* <Router>
              <ul>
                  <li><Link to="/index1">首页</Link></li>
                  <li><Link to="/index2/">首页2</Link></li>
              </ul>
              <Route path='/index1' component={Index} />
                    <Route path='/index2' component={Index2} />
          </Router> */}
       
        </div>
    )
}
export default Useeffect2