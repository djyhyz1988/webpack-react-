import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeFooter from '../../components/HomeFooter/index';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState)=>{
            return PureRenderMixin.shouldComponentUpdate(this, nextProps, nextState);
        }
    }

    render(){
        const navIndex = this.props.navIndex
        return(
            <HomeFooter navIndex={ navIndex }/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{

    }
}

let mapDispatchToProps = (diapatch) =>{
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
