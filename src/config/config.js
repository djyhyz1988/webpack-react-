/**
 * 配置接口地址信息
 * **/
import Apis from './api.config';
let env = process.env.NODE_ENV || 'development';

let config = {
    development:{
        apis: new Apis().init('development')
    },
    production:{
        apis: new Apis().init('production')
    }
}

let online = env === 'production';
let currentConfig = config[online? env: 'development'];

export default currentConfig;