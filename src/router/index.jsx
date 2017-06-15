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

/** 首页 **/
import Home from '../containers/Home';
import Goods from '../containers/Goods';
import NotFound from '../containers/NoFound/404Page';

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
                <Route path="/goods" component={ Goods }/>
                <Route component={NotFound}/>
            </Switch>
        );
        return (
            <Router>
                <div>
                    { this.state.initialDone? Routes:(<div>加载中...</div>) }
                </div>
            </Router>
        )
    }
};
export default App;

