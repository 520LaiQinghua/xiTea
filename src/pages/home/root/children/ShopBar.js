import React from 'react'
import { connect } from 'react-redux'
const ShopBar = (props) => {

    return (
        <div className="shop-bar border-bottom">
            <span>{props.shop}</span>
            <span className="iconfont icon-dizhiguanli"></span>
        </div>
    )

}
export default connect()(ShopBar);