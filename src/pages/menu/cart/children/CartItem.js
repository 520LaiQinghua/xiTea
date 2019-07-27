import React from 'react';
//全局函数，需要用connect作为连接函数去使用
import {connect} from 'react-redux'
import {modifyTeaAction} from '../../../../store/modules/cart'

const CartItem = ({data,handleTeaCount})=>(
   
    <div className="cart-item border-bottom">
    <div className="left">
        <img src={data.imageUrl} alt="买东西啦"/>
    </div>
    <div className="center">
        <h3 className="title">{data.name}</h3>
    </div>
    <div className="right">
        <p className="price">¥{data.price}</p>
        <div className="handle">
            {/* 设置购物车数量的增加和减少，考虑好三目运算符号的格式 */}
            <span className={"btn "+(data.count===1?'disabled':'')}
                onClick={()=>{
                    (data.count>1) && handleTeaCount('reduce', data.id);
                }}>-</span>
            <span className="num">{data.count}</span>
            <span className="btn"
                onClick={()=>handleTeaCount('add', data.id)}>+</span>
        </div>
    </div>
</div>



)
const mapStateToProps = (state, props)=>({
    
})
const mapDispatchToProps = (dispatch, props)=>({
    // 操作购物车的数量
    handleTeaCount(flag, id){
        //从store中传入pramas参数进来运算,flag值为'add'还是'reduce'
        let action = modifyTeaAction({flag, id});
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);