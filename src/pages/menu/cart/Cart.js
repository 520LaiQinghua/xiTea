import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/index'
import AppScroll from '../../../components/app-scroll/AppScroll'
import CartItem from './children/CartItem'
import './cart.scss'
import {connect} from 'react-redux';

 class Cart extends Component {
    render() {
        let leftBtn = <span className="header-left-btn iconfont icon-fanhui" onClick={this.backAction}></span>;
        let sum = 0;
        return (
        <div className="page subpage" id="cart">
            <AppHeader title="购物车" leftBtn={leftBtn}/>
            <AppScroll className="content">
            {
                this.props.cartData.map(item=>(
                    <CartItem key={item.id} data={item}/>
                ))
            }
            </AppScroll>
        <footer className="sum">
       <p>结算:￥<strong >{sum}</strong></p> 
     </footer>
        </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props.cartData);
        
    // }
backAction = ()=>{
        //回退，返回到菜单页面
        this.props.history.goBack();
    }
    
}
const mapStateToProps = (state, props)=>({
    cartData: state.cart,
    

})


const mapDispatchToProps = (dispatch, props)=>({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
