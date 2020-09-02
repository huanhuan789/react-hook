// 多状态声明
import React, { useState } from 'react';

function B(){
    // 声明 ，读取，使用  
    /*左侧 数组解构 count变量   setcount函数 接收将要改变的状态
     * 右侧useState()方法里接收初始值 (不能存在if条件语句中)
     */
    // 声明多个内容
    const [Age,setAge]=useState(18);
    const [sex,setsex]=useState('男');
    const [height,setheight]=useState(180);
    // 正常写法
    // let _useState=userState(0)
    // let count=_useState[0]
    // let setState=_useState[1]
    return (
        <div>
            <h1>-------多次使用useState</h1>
            <p>今年:{Age}</p>
            <p>性别:{sex}</p>
            <p>身高:{height}</p>
        </div>
    )
}
export default B