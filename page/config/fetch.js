
/**
 * 配置接口信息
 * baseUrl: 域名地址
 */
import baseUrl  from './env'

export const information = {
    //POST请求
	setPost:function(){
		console.log(baseUrl+"-------------");
    },
    //GET请求
	setGet:function(url,callback){
		
    },
    //验证邮箱
    isMailbox:function(val) {
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(val)) {
           return false;
        };
    },
    //数字验证
    isNumber:function checkNum(val){
        console.log(val);
        var reg=/^[0-9]*$/; //判断字符串是否为数字 ，判断正整数用/^[1-9]+[0-9]*]*$/
        if(!reg.test(val)){
            return false;
        }else{
            return true;
        }
    },
    //获取链接后参数
    getCaption:function(obj){
        var index=obj.lastIndexOf("\=");
        obj=obj.substring(index+1,obj.length);
        return obj;
    },
    //获取最近几天时间
    getThisTime:function(day){
        var today = new Date();
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); 
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear+"-"+tMonth+"-"+tDate;
    },
    doHandleMonth:function(month){
        var m = month;
        if(month.toString().length == 1){
            m = "0" + month;
        };
        return m;
    },
};
export default information;