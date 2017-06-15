import React from 'react';
import { Link } from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class HomeFooter extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = (nextProps, nextState)=>{
            return PureRenderMixin.shouldComponentUpdate(this, nextProps, nextState);
        }
    }
    render(){
        const curIndex = this.props.navIndex;
        return(
           <div className="footer flex flex-pack-j">
               <div className="nav">
                   {
                       curIndex==1 ? <div>
                           <img src={ require('../../images/icon/home-hover.png') }/>
                           <span className="txt">首页</span>
                       </div>
                       :
                       <Link to="/">
                           <img src={ require('../../images/icon/home.png') }/>
                           <span className="txt">首页</span>
                       </Link>
                   }
               </div>
               <div className="nav">
                   {
                       curIndex==2
                       ?
                       <div>
                           <img src={ require('../../images/icon/all-hover.png') }/>
                           <span className="txt-hover">全部商品</span>
                       </div>
                       :
                       <Link to="/goods">
                           <img src={ require('../../images/icon/all.png') }/>
                           <span className="txt">全部商品</span>
                       </Link>
                   }

               </div>
               <div className="nav">
                   {
                       curIndex==3
                           ?
                           <div>
                               <img src={ require('../../images/icon/cart-hover.png') }/>
                               <span className="txt-hover">购物车</span>
                           </div>
                           :
                           <div>
                               <img src={ require('../../images/icon/cart.png') }/>
                               <span className="txt">购物车</span>
                           </div>
                   }
               </div>
               <div className="nav">
                   {
                       curIndex==4
                           ?
                           <div>
                               <img src={ require('../../images/icon/myorder-hover.png') }/>
                               <span className="txt-hover">我的订单</span>
                           </div>
                           :
                           <div>
                               <img src={ require('../../images/icon/myorder.png') }/>
                               <span className="txt">我的订单</span>
                           </div>
                   }
               </div>

           </div>
        )
    }
}

export default HomeFooter;