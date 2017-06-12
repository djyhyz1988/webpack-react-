import * as actionTypes from './actionTypes';
import config from '../../config/config';
import httpApi from '../../fetch/post';

export function getUserInfo(data) {
    return {
        type: actionTypes.USER_INFO_DETAIL,
        data
    }
}
export function getDataSuccess() {
    console.log('获取数据啦');
}
/**  获取头部数据 **/
export const getUser = (data)=>{
    return dispatch=>{
        dispatch(getUserInfo(data))
        let options ={
            url: ''
        }
        httpApi.post(options)
            .then((json)=> dispatch(getDataSuccess()))
            .then((err)=>{
                console.log('错误信息:' + err)
            })
    }
}