import React, { Component } from 'react';
import BScroll from 'better-scroll'
import './appScroll.scss'
class AppScroll extends Component {

    wrapper = React.createRef();
    render() {
        return (
            <div className="scroll-wrapper" ref={this.wrapper}>
               <div className='scroll-content'>
               {this.props.children}
                </div> 
            </div>
        );
    }
    componentDidMount(){
        let scroll = new BScroll(this.wrapper.current);
        //在用户需要滚动前及时更新滚动视图
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
}

export default AppScroll;