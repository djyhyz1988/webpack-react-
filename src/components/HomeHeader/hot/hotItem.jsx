import React from 'react';
import { Link } from 'react-router-dom'

class HotItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = this.props.data
        const hotGoods = data.HotGoodsItems ? data.HotGoodsItems : ''

        return(
            <div>
                <div className="hot-box">
                    <div className="recomment-title">
                        <span className="line"></span>
                        <span className="title">精品推荐</span>
                        <span className="line"></span>
                    </div>

                <div className="hot-list">
                    {
                        hotGoods
                        ?
                        hotGoods.map((item,index) => {
                          return <Link to='/' key={ index } className="hot-item">
                                <img src={ item.ImageUrl }></img>
                                <div className="content flex-pack-j">
                                    <div className="title lineclamp1">
                                        { item.Name }
                                    </div>
                                    <div className="priceinfo">
                                        <span className="disprice">¥ { item.SalePrice }</span>
                                    </div>
                                </div>
                            </Link>
                        } )
                        :
                        ''
                    }
                </div>
              </div>
            </div>
        )
    }
}

export default HotItem