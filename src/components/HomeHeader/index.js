import React from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';

import './style.less';

class HomeHeader extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
    }

    render(){
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
                                    </div>
                                    <div className="nickname">阿杜</div>
                                </div>
                            </div>
                            <div className="tags flex-wrap">
                                <div className="tag">
                                    标签
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader;