import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader';

import { getUser } from '../../redux/actions/userinfo.action';

class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    componentWillMount (){
        this.props.getUser();
    }

    render(){
        return(
            <div>
                <HomeHeader />
            </div>
        )
    }
}
/**
 * action中的数据
 * **/
let mapStateToProps = (state, ownProps)=>{
    return {
        data: state.data
    }
}
/**
 *actions中的方法
 * **/
let mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);



