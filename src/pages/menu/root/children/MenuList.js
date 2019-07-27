import React,{PureComponent} from 'react'
import AppScroll from '../../../../components/app-scroll/AppScroll'
import Item from "./Item";

 
//使用PureComponent让MenuList渲染次数减少，让react的性能得到优化,使用connect也是可以得到相应的优化的
export default class MenuList extends PureComponent{
    //防止在还未 执行render()的前提下把空数组push进去
    listDOM = [];
    //通过拿出dom的offsetHeight来操作滚动视图
    scroll = React.createRef();
    render(){
 
        let {data} = this.props;
        this.listDOM = [];
        return (
       
            <AppScroll className="list" ref={this.scroll} onScroll={this.handleScroll}>
                {
                   data.map((listInfo,i)=>{
                    let dom = React.createRef();
                    this.listDOM.push(dom);
                        return (
                            <div className="menu-list border-bottom" ref={dom} key={listInfo.id}>
                            <h3 className="list-title">{listInfo.name}</h3>
                            {
                                 listInfo.data.map((item,index)=>(
                                     //data={item}不是用解构的方式来写则是考虑到点击时需要将整个data传值过去
                                    <Item key={item.id} data={item}/>
                                ))
                            }
                           </div>
                        )
                        })
                }
            </AppScroll>
         
         )
    }
   scrollToIndex(index){
        // console.log('componentDidUpdate...');
       
            //滚动视图，到对应的菜单
           //根据下标计算需要偏移的高度
           let height = 0;
        for(let i = 0; i < index; i++){
            let dom = this.listDOM[i].current;
            height -= dom.offsetHeight;
        }
           //操作滚动视图，让菜单滚动到对应位置
           this.scroll.current.scrollTo(height);

   }
     // 处理滚动事件，查到应该选中的菜单类型
    handleScroll = (y)=>{
        this.listDOM.forEach(({current:dom}, i)=>{
            let maxY=0;
            let minY = 0;
            for(let j=0;j<i;j++){
                maxY -= this.listDOM[j].current.offsetHeight;
            }
            minY = maxY-this.listDOM[i].current.offsetHeight;
            if(y>minY&&y<=maxY){
                 //设置flag:'menu'是防抖得作用，主要是在Menu内部Update生命周期中有着多次更新！
                this.props.onChange({index:i,flag:'menu'})
            }
            
        })
    }
}