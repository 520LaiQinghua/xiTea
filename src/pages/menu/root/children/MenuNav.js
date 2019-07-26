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
                onClick={()=>onChange(index)}>
                    {item.name}
                </li>
            ))
        }
        </AppScroll>
    
    )
}