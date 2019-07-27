import React from 'react';
import {connect} from 'react-redux'
import {addTeaAction} from '../../../../store/modules/cart'

const Item = (props)=>(
    <div className="menu-item border-bottom">
        <div className="pic">
        <img src={props.data.imageUrl} alt="您想喝什么果汁呢"/>
        </div>
        <div className="content">
            <h3 className="title">{props.data.name}</h3>
            <p className="desc">{props.data.desc}</p>
            <p className="price">
                <span>¥{props.data.price}</span>
                <span className="buy" onClick={()=>props.addTea(props.data,props.id)}>购买</span>
            </p>
        </div>
    </div>
)

const mapStateToPops = (state,props)=>{

};
const mapDispatchToProps = (dispatch,props)=>({
    //点击购买按钮事件
    addTea(info,id){
        let btnBuy = document.querySelector('.buy');
        // console.log(btnBuy);
        
        let action = addTeaAction(info);
         btnBuy.style.background = 'red';
        dispatch(action);
    }
})
export default connect(mapStateToPops,mapDispatchToProps)(Item);