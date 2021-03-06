import request from '../api/api.js'
import urls from '../api/request.js'
// 待付款
class Payment{
	constructor(payment) {
	    this.payment = payment
	}
	// 1.拉起付款
    async paySucc(){
        try{
            // 拉起付款
            await this.wxPay()
        }catch(e){
            throw e
        }
        // 查询订单状态
        let Chaxun = {
            appid:"wx6c4c8e3f1734291d",
            mchid:"1621643640",
            partnerKey:"58d87cef6d69ffbe6f9120dingyujian",
            id:this.payment._id,
            outno:this.payment.out_trade_no
        }
        try{
        	let querydata = await new request(urls.m().queryorder,Chaxun).modepost()
        	return querydata
        }catch(e){
        	throw '支付失败'
        }
    }
    
    // 调用支付
    wxPay(){
    	return new Promise((resolve,reject)=>{
    		wx.requestPayment({
                timeStamp: this.payment.timeStamp,
                nonceStr: this.payment.nonceStr,
                package: this.payment.package,
                signType: this.payment.signType,
                paySign: this.payment.paySign,
                success:res=> {
                    resolve(res)
                },
                fail:Error=>{
                    reject(Error)
                }
    		})
    	})
    }
}

module.exports = {Payment}