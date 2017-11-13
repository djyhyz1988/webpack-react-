/**
 *  搜索框
 */
import React from 'react';
import './style.less';

class SearchInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    render(){
        return(
            <div className="header">
                <div className="search-wrap">
                    <div className="search-bar flex">
                        <div className="search flex">
                            <i className="search_icon"></i>
                            <input
                                className="search-input flex_1 lineclamp1"
                                type="text"
                                placeholder="请输入店铺内商品"
                            />
                        </div>
                        <div className="search-classify">
                            <i className="classify_icon"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SearchInput