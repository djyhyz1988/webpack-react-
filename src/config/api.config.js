/**
 * 接口地址信息
 */
class Apis{
    constructor(){
        this.development = "https://373671.xapp.weimob.com";
        this.production = "https://373671.xapp.weimob.com";
        this.apis = {
            userinfoApi:{
                index: '/api3/v/GetSampleIndex'
            }
        }
    }
}

Apis.prototype.getCompleteUrl = function(data,url){
    let _this = this;
    Object.keys(data).forEach(function(item){
        if(typeof data[item] == "object"){
            _this.getCompleteUrl(data[item],url);
        }else if(typeof data[item] == "string"){
            data[item] = url + data[item];
        }
    });
    return data;
}

Apis.prototype.init = function(env){
    return this.getCompleteUrl(this.apis,this[env]);
}

export default Apis
