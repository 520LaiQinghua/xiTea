import React from 'react';
import AppScroll from '../../../../components/app-scroll/AppScroll'
export default (props)=>{
    return (
        <div className="nav border-right">
        <AppScroll>
        {
            props.data.map(item=>(
                <li className="nav-item border-bottom" key={item.id}>
                    {item.name}
                </li>
            ))
        }
        </AppScroll>
    </div>
    )
}