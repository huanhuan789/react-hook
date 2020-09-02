//1、引入useEffect 
import React, { useState, useEffect} from 'react';
/**
 * 方法  在useEffect函数中可以代替不同生命周期函数
 */
function Useeffect1() {
    // 声明 ，读取，使用  
    /*左侧 数组解构 count变量   setcount函数 接收将要改变的状态
     * 右侧useState()方法里接收初始值 
     */
    const [count, setCount] = useState(0);
    const [disabled, setdisabled] = useState(true);
        // 正常写法
    // let _useState=userState(0)
    // let count=_useState[0]
    // let setState=_useState[1]

    // useEffect代替生命周期函数
    useEffect(()=>{
        // 组件挂载
        console.log(`useEffec-count-------${count}`)
        console.log(`useEffect-disabled-------${disabled}`)
        //[]代表的是能够引起副作用执行的依赖，数组中填的变量状态 触发这个状态后 要引起的这个逻辑功能(若组件卸载会执行return后的语句，在语句中可以得到前一个状态)
        //空数组时 不会执行副作用 只会显示初次渲染的状态componentDidMount unmount的过程
        // 不写数组参数,触发任一个状态都会使副作用执行
        // 组件卸载
        return()=>{
            console.log('卸载',disabled)
        }
    },[disabled])
    useEffect(()=>{
        //[]代表的是能够引起副作用执行的依赖，数组中填的变量状态 触发这个状态后 要引起的这个功能 
        //空数组时 不会执行副作用 只会显示初次渲染的状态componentDidMount unmount的过程
        // 不写数组参数,触发任一个状态都会使副作用执行
        // 组件挂载
        console.log('函数组件挂载')
        const handleClick=()=>{console.log(2)}
        document.addEventListener('click',handleClick)
        return()=>{
            // 组件卸载
            console.log('函数组件卸载')
            document.removeEventListener('click',handleClick)
        }
    },[])


    return (
        <div>
            <h1>-------useEffect</h1>
    <button onClick={()=>{setdisabled(!disabled)}}>{disabled?'隐藏':'显示'}</button>
            <p>点击{count}</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            <div>
            </div>
          
       
        </div>
    )
}
export default Useeffect1