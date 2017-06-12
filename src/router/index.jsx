/**
 * 基于React router V4.x版本
 * **/
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
/** React组件性能优化 **/
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

/** 首页 **/
import Home from '../containers/Home';

class App extends React.Component{
    constructor(props,context) {
       super(props,context);
       //shouldComponentUpdate来进行更加定制化的性能优化。
       this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
       this.state ={
           initialDone : true
       }
    }

    render(){
        let Routes =(
            <Switch>
                <Route exact path="/" component={ Home } />
            </Switch>
        );
        return (
            <Router>
                <div>
                    { /**  **/}
                    { this.state.initialDone? Routes:(<div>加载中...</div>) }
                </div>
            </Router>
        )
    }
};

// const mapStateToProps = state => ({});
//
// const mapDispatchToProps = dispatch => ({
//
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);

export default App;

