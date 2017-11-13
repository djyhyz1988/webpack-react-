import * as actionTypes from './actionTypes';
import config from '../../config/config';
import httpUtil from '../../fetch/post';

export function getUserInfo(data) {
    return {
        type: actionTypes.USER_INFO_DETAIL,
        data
    }
}

/**  获取头部数据 dispatch(getUserInfo(json))**/
export const getUser = () =>{
    return dispatch => {
        let options ={
            header:{}
        }

        httpUtil.post(config.apis.userinfoApi.index,options)
            .then((json) => {
                dispatch(getUserInfo(json.data))
            },(err) => {
                console.info('err',err);
            })

    }
}