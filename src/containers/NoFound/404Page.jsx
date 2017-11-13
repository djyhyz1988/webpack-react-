import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export  default  class NoFound extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render(){
        return(
            <div>
                页面丢失了
            </div>
        )
    }
}