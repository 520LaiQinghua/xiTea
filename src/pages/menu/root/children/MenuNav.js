import React from 'react';
import AppScroll from '../../../../components/app-scroll/AppScroll'
export default (props)=>{
    //把需要的参数传过来
    let {selected,onChange} = props;
    return (
      
        <AppScroll className="nav border-right">
        {
            props.data.map((item,index)=>(
                <li className={"nav-item border-bottom "+(selected===index?'active':'')} key={item.id}
                //设置flag:'nav'是防抖得作用，主要是在Menu内部Update生命周期中有着多次更新！
                onClick={()=>onChange({index,flag:'nav'})}>
                   
                    {item.name}
                </li>
            ))
        }
        </AppScroll>
    
    )
}