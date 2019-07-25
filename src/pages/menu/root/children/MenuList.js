import React from 'react'
import AppScroll from '../../../../components/app-scroll/AppScroll'

const Item = (props)=>(
    <div className="menu-item border-bottom">
      <div className="pic">
            <img src={props.imageUrl}/>
        </div> 
        <div className="content">
            <h3 className="title">{props.name}</h3>
            <p className="desc">{props.desc}</p>
            <p className="price">
                <span>¥{props.price}</span>
                <span className="buy">购买</span>
            </p>
        </div> 
    </div>
) 
export default (props)=>{
    return (
       <div className="list">
       <AppScroll>
           {
               props.data.map((listInfo)=>(
                   <div className="menu-list border-bottom" key={listInfo.id}>
                    <h3 className="list-title">{listInfo.name}</h3>
                    {
                        listInfo.data.map(item=>(
                            <Item key={item.id} {...item}/>
                        ))
                    }
                   </div>
               ))
           }
       </AppScroll>
       </div> 
    )
}