import React,{Component} from 'react'
import AppScroll from '../../../../components/app-scroll/AppScroll'

const Item = (props)=>(
    <div className="menu-item border-bottom">
      <div className="pic">
            <img src={props.imageUrl} alt="您想喝什么果汁呢"/>
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
export default class MenuList extends Component{
    //防止在还未 执行render()的前提下把空数组push进去
    listDOM = [];
    //通过拿出dom的offsetHeight来操作滚动视图
    scroll = React.createRef();
    render(){
 
        let {data} = this.props;
        this.listDOM = [];
        return (
       
            <AppScroll className="list" ref={this.scroll}>
                {
                   data.map((listInfo,i)=>{
                    let dom = React.createRef();
                    this.listDOM.push(dom);
                        return (
                            <div className="menu-list border-bottom" ref={dom} key={listInfo.id}>
                            <h3 className="list-title">{listInfo.name}</h3>
                            {
                                 listInfo.data.map(item=>(
                                    <Item key={item.id} {...item}/>
                                ))
                            }
                           </div>
                        )
                        })
                }
            </AppScroll>
         
         )
    }
    componentDidUpdate(oldProps){
        // console.log('componentDidUpdate...');
        if(oldProps.selected !== this.props.selected){
             //滚动视图，到对应的菜单
            //根据下标计算需要偏移的高度
            let height = 0;
            this.listDOM.forEach(({current:dom}, i)=>{
                if(i < this.props.selected){
                    height -= dom.offsetHeight;
                }
            })
            //操作滚动视图，让菜单滚动到对应位置
            this.scroll.current.scrollTo(height);
        }
        
    }


}