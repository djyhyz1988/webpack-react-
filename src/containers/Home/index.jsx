import React from "react";
import { connect } from "react-redux";
import PureRenderMixin from "react-addons-pure-render-mixin";
import baseContainer from '../baseContainer'
/** 组件引入 **/
import HomeHeader from "../../components/HomeHeader/index";
import HomeFooter from "../../components/HomeFooter/index";

import { getUser } from "../../redux/actions/userinfo.action";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  componentWillMount() {
    console.log("Child componentWillMount!");
    //首页信息
    this.props.getUser();
  }
  componentDidMount() {
    console.log("Child componentDidMount!");
  }
  componentWillReceiveProps(nextProps) {
    console.log("Child componentWillReceiveProps:" + nextProps.data);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Child componentWillUpdate:" + nextProps.data);
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }
  render() {
    return (
      <div>
        <HomeHeader data={this.props.userinfo ? this.props.userinfo : ""} />
        <HomeFooter navIndex="1" />
      </div>
    );
  }
}
/**
 * action中的数据
 * **/
let mapStateToProps = state => {
  return {
    userinfo: state.userinfo
  };
};
/**
 * actions中的方法
 * **/
let mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
