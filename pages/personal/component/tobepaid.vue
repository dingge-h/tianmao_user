<template>
    <view class="payment-view">
        <!-- 商品详情 -->
        <!-- <block v-for="(item,index) in tobepaid" :key="index"> -->
            <view class="payment-commodity">
                <!-- <text class="order-tips" v-if="item.expire">该订单已过期</text> -->
                <text class="order-tips">等待买家付款</text>
                <!-- <block v-for="(iteming,indexs) in item.order" :key="indexs"> -->
                    <view class="payment-order" @click="!item.expire && payDetail(item._id)">
                        <view class="payment-order-img">
                            <image src="http://h.thexxdd.cn/tianmao/public%5Cuploads%5C1603039514409-4389831.webp" mode="aspectFill"></image>
                        </view>
                        <view class="payment-title">
                            <text>标题</text>
                            <text class="text-you">颜色:黑色;尺码:L</text>
                        </view>
                        <view class="payment-flex">
                            <view class="payment-price">
                                <text>￥ 200</text>
                                <text class="text-you">x1</text>
                            </view>
                        </view>
                    </view>
                <!-- </block> -->
                <!-- 价格 -->
                <view class="presonal-Price">需付款￥200</view>
                <!-- 付款 -->
                <view class="presonal-payment">
                    <text v-if="item.expire" @click="deteOrder(item._id)">删除订单</text>
                    <text v-else @click="payMent({_id:item._id,timeStamp:item.timeStamp,nonceStr:item.nonceStr,package:item.package,signType:item.signType,paySign:item.paySign,out_trade_no:item.out_trade_no})">付款</text>
                </view>
            </view>
        <!-- </block> -->
        <!-- 登录界面 -->
        <loginpage ref="loginmen"></loginpage>
        <!-- 没有订单数据 -->
        <ordering ref="orderload"></ordering>
    </view>
</template>

<script>
    import '../../../style/order.css'
</script>

<style>
</style>
