import React, { Component } from 'react'
import {requestMenuData} from '../../../store/modules/menu'
import {connect} from 'react-redux'
import MenuNav from './children/MenuNav'
import MenuList from './children/MenuList'
import '../menu.scss'
 class Menu extends Component {
     state = {
         selectIndex:0
     };
    render() {
        let {nav, list} = this.props;
        return (
          
            <div className="page" id="menu">
            <MenuNav data={nav}/>
            <MenuList data={list}/>
        </div>
        )
    }
    //请求菜单数据
    componentDidMount(){
        this.props.getMenuData();
    }
}
const mapStateToProps = (state)=>({
    nav:state.menu.navData,
    list:state.menu.menuData,

})
const mapDispatchToProps = (dispatch)=>({
    //调用异步action,请求数据
    getMenuData(){
        let action = requestMenuData();
        dispatch(action);
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu)