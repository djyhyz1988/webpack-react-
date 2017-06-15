import React from 'react';
import { Link } from 'react-router-dom'

class RecommendItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = this.props.data
        const QualityGoods = data.QualityGoodsItems ? data.QualityGoodsItems : ''

        return(
                <div className="recommend-box">
                <div className="recomment-title">
                    <span className="line"></span>
                    <span className="title">热门推荐</span>
                    <span className="line"></span>
                </div>
                <div className="boutique-recommend">
                    {
                        QualityGoods
                            ?
                            QualityGoods.map((item,index) => {
                                return <Link to='/' key={ index } className="item">
                                    <img src={ item.ImageUrl }></img>
                                        <div className="title lineclamp1">
                                            { item.Name }
                                        </div>
                                        <div className="price">¥ { item.LowPrice }</div>
                                </Link>
                            } )
                            :
                            ''
                    }
                </div>
            </div>
        )
    }
}

export default RecommendItem