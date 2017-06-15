import React from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';

import HotItem from './hot/hotItem';
import RecommendItem from './recommend/recommendItem';
import './style.less';

class HomeHeader extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState)=>{
           return PureMixinRender.shouldComponentUpdate(this, nextProps, nextState);
        }
    }
    render(){
        const data = this.props.data
        const classItems = data.ClassifyItems ? data.ClassifyItems : ''

        return(
            <div className="index-wraper">
                <div className="header-wrap">
                    <div className="header">
                        <div className="header-content">
                            <div className="search-bar">
                                <div className="search">
                                    搜索
                                </div>
                            </div>
                            <div className="head_portrait">
                                <div>
                                    <div className="header-cricle">
                                        <img src={ data.BusinessInfo? data.BusinessInfo.logo : '' } />
                                    </div>
                                    <div className="nickname"> { data.BusinessInfo? data.BusinessInfo.Name : '汤姆猫' }</div>
                                </div>
                            </div>
                            <div className="tags flex-wrap">
                                {
                                    classItems
                                        ?
                                        classItems.map((item,index) => {
                                           return <div key={index} className="tag">{ item.Name }</div>
                                        })
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <RecommendItem data={ data }/>
                {/* 热门推荐 */}
                <div className="hr-line"></div>
                <HotItem data={ data }/>
            </div>
        )
    }
}
export default HomeHeader;