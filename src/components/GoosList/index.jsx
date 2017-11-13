/**
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './stye.less';

class GoodsList extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = (nextProps, nextState)=>{
            return PureRenderMixin.shouldComponentUpdate(this, nextProps, nextState);
        }

        this.state = {
            viewType: 0
        }
    }

    render (){
        return (
            <div className="list-view">
                <div className="list-item">
                    <Link to="/" >
                        <div className="list-item-line">
                            <div className="imgbox">
                                <i></i>
                            </div>
                            <div className="content">
                                <div className="title lineclamp2"></div>
                                <div className="buy_price">
                                    <div className="price">
                                        <div className="dicprice">¥ <b className="priceTxt"></b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default GoodsList