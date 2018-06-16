// pages/map/map.js
const app = getApp()

Page({
  // 数据绑定区域
  data: {
    // latitude:28.68202,
    // longitude:115.85794,
    latitude:39.90646,
    longitude:116.40717,
    // latitude:0,
    // longitude:0,
    scale:14,
    controls:[],
    showLocation:true,
    touristNameInfo:'',
    markers: [{
      iconPath: "/images/icons/icon_position.png",
      id: 0,
      // latitude: 28.68202,
      // longitude: 115.85794,
      latitude:0,
      longitude:0,
      width: 30,
      height: 30,

    }]
      
    
  },
  onReady:function(){
    // console.log("ready")
    // 小程序提供了获取经纬度的方法
    wx.getLocation({
      type:'gcj02',
      success:(res) =>{
        // console.log(res.latitude,res.longitude);
        // 重新设置data里的数据 页面自动刷新
        // this.setData({
        //   latitude:res.latitude,
        //   longitude:res.longitude
        // })
      }
    })
    // data 数据初始化，数据会随着生命周期，用户的请求发生改变，数据是会变得，
    // 绑定着数据的页面也要随之改变，自动刷新页面 setData 就是这样的api 
    // Page 先显示地图 晚一点显示control
    this.setData({
      controls:[{
        id:1,
        iconPath:"/images/location.png",
        position:{
          left:20,
          top:200,
          width:50,
          height:50
        }
      }]
    })
  },
  // 生命周期函数
  onLoad:function(options){
    const touristNameTemp=options.name;
    const latitudeTemp=options.latitude;
    const longitudeTemp=options.longitude;
    this.setData({
      touristNameInfo:touristNameTemp,
      latitude:latitudeTemp,
      longitude:longitudeTemp,
      'markers[0].latitude':latitudeTemp,
      'markers[0].longitude':longitudeTemp
    })
  },
  toMyPosition(){
    // console.log("ready")
    // 小程序提供了获取经纬度的方法
    wx.getLocation({
      type:'gcj02',
      success:(res) =>{
        console.log(`我的位置：${res.latitude},${res.longitude}`);
        // 重新设置data里的数据 
        //修改我的位置信息,修改数组的2个元素
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          'markers[0].latitude':res.latitude,
          'markers[0].longitude':res.longitude,
          'markers[0].iconPath':'/images/icons/icon_my_position.png'
        })
        //刷新页面
        this.onReady()
      }
    })
  }

})