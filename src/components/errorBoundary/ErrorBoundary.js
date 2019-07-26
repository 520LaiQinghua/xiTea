import React, { Component } from 'react';
import './errorB.css'
class ErrorBoundary extends Component {
    state = {
        isError:false
    };
    render() {
        if(this.state.isError){
            return (
                <div className="errorB">
                   <p> 抱歉，暂时找不到网页！</p><br/>
                
                    <img src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124246402.gif" alt="抱歉，暂时找不到网页！"/>
                </div>
            );
        }else{
            return this.props.children
        }
       
    };
    componentDidCatch(...rest){
this.setState({isError:true})
//错误信息传送给后台，混合开发中会讲到
    }
}

export default ErrorBoundary;