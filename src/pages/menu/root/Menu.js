import React, { Component } from 'react'
import {requestMenuData} from '../../../store/modules/menu'
import {connect} from 'react-redux'
import MenuNav from './children/MenuNav'
import MenuList from './children/MenuList'
import AppHeader from '../../../components/app-header/index'
import '../menu.scss'
 class Menu extends Component {
     state = {
         selectIndex:0
     };
    render() {
        let {nav, list} = this.props;
        let {selectIndex} = this.state;
        return (
            
            <div className="page" id="menu">
            <AppHeader title="菜单"></AppHeader>  
           <div className="scrollContent">
           <MenuNav data={nav} selected={selectIndex} onChange={this.handleChange}/>
            <MenuList data={list} selected={selectIndex} onChange={this.handleChange}/>
           </div>
        </div>
        )
    }
    //请求菜单数据
    componentDidMount(){
        this.props.getMenuData();
    }
    handleChange = (index)=>{
        this.setState({selectIndex:index});
    }
}
const mapStateToProps = (state,props)=>({
    nav:state.menu.navData,
    list:state.menu.menuData,

})
const mapDispatchToProps = (dispatch,props)=>({
    //调用异步action,请求数据
    getMenuData(){
        let action = requestMenuData();
        dispatch(action);
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu)