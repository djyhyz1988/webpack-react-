import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
/** 组件引入 **/
import HomeHeader from '../../components/HomeHeader';
import HomeFooter from '../../components/HomeFooter';

import { getUser } from '../../redux/actions/userinfo.action';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render(){
        return(
            <div>
                <HomeHeader data={ this.props.userinfo ? this.props.userinfo : ''}/>
                <HomeFooter navIndex="1" />
            </div>
        )
    }
    componentWillMount (){
        //首页信息
        this.props.getUser();
    }
}
/**
 * action中的数据
 * **/
let mapStateToProps = (state)=>{
    return {
        userinfo: state.userinfo
    }
}
/**
 *actions中的方法
 * **/
let mapDispatchToProps = (dispatch)=>{
    return {
        getUser:()=>{
            dispatch(getUser())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);



