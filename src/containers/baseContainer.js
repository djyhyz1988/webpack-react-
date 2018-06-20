import React from 'react';
import {is} from 'immutable';

class baseContainer extends React.Component(){
    constructor(props,context,updater){
        super(props,context,updater)
    }
    shouldComponentUpdate(nextProps,nextState){
        const thisProps = this.props || {};
        const thisState = this.state || {};

        nextProps = nextProps || {};
        nextState = nextState || {};

        if(Object.keys(thisState).length!==Object.keys(nextState) || Object.keys(thisProps).length!==Object.keys(nextProps)){
            return true;
        }

        for(var key in nextState){
            if(!is(thisState[key],nextState[key])){
                return true;
            }
        }
        for(var key in nextProps){
            if(!is(thisProps[key],nextProps[key])){
                return true;
            }
        }
        return false;
    }
}