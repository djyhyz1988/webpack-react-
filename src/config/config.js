/**
 * 配置接口地址信息
 * **/
import Apis from './api.config';
let env = process.env.NODE_ENV || 'development';

console.log(Apis)
let config = {
    development:{
        apiRootUrl: 'https://373671.xapp.weimob.com',
        //apis: new Apis().init('development')
    },
    production:{
        apiRootUrl: '',
        apis: new Apis().init('production')
    }
}

let online = env === 'production';
let currentConfig = config[online? env: 'development'];

export default currentConfig;