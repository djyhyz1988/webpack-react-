/**
 * 接口地址信息
 */
class Apis{
    constructor(){
        this.apis = {
            userinfoApi:{
                index: '/api3/v/GetSampleIndex'
            }
        }
    }
}

Apis.prototype.init = (env)=>{
    return this.getCompleteUrl(this.apis,this[env]);
}
Apis.prototype.getCompleteUrl =(data,url)=>{
    let _this = this;
    for(let index of keys(data)){
        console.log(index);
    }
}

export default Apis