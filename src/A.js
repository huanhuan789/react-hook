import React, { useState } from 'react';
import B from './B';
import Useeffect from './Useeffect1';
import Useeffect1 from './Useeffect';
import Useeffect2 from './Useeffect2';
function A() {
    // 声明 ，读取，使用  
    /*左侧 数组解构 count变量   setcount函数 接收将要改变的状态
     * 右侧useState()方法里接收初始值 
     */
    const [count, setCount] = useState(0);
    const [visible,setVisible]=useState(true)
    // 正常写法
    // let _useState=userState(0)
    // let count=_useState[0]
    // let setState=_useState[1]
    return (
        <div>
            <h1>-----------usestate1</h1>
            <p>点击{count}</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            <div>
            </div>
            <B />
            <Useeffect />
            {/* 模拟组件卸载 */}
            <h1>----------------模拟组件卸载</h1>
            <button onClick={()=>setVisible(!visible)}>点击组件:{visible?'显示':'隐藏'}</button>
            {/* 一假则假 */}
            {visible && <Useeffect1 />}
            <Useeffect2 />

        </div>
    )
}
export default A