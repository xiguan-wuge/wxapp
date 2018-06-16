//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showUserInfo:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    place:'南昌',
    categoryInfo: [
      {image:'/images/icons/icon_tourist.png',title:'公园游乐园'},
      {image:'/images/icons/icon_playground.png',title:'温泉'},
      {image:'/images/icons/icon_swim.png',title:'清凉玩水'},
      {image:'/images/icons/icon_nature.png',title:'自然风光'},
      {image:'/images/icons/icon_animal.png',title:'动植物乐园'},
      {image:'/images/icons/icon_heaven.png',title:'高空景观'},
      {image:'/images/icons/icon_oldplace.png',title:'名胜古迹'},
      {image:'/images/icons/icon_show.png',title:'展馆展览'},
      {image:'/images/icons/icon_village.png',title:'度假村'},
      {image:'/images/icons/icon_perform.png',title:'演出演艺'}   
    ],
    touristSpotList:[
      {
        id:1,
        imageSrc:'/images/tourist/nanchangwandahangyangleyaun.jpg',
        touristInfoName:'南昌万达海洋乐园',
        evaluateLevel:'好',
        evaluateScore:'4.3',
        consumeNum:'8000+',
        feature:[
          {info:'随买随用'},
          {info:'亲子同乐'},
          {info:'海豚海狮表演'},
          {info:'公园游乐场'},
        ],
        price:'90',
        touristLocation:'万达茂/南昌'
      },
      {
        id:2,
        imageSrc:'/images/tourist/tengwangge.png',
        touristInfoName:'滕王阁游轮有限公司',
        evaluateLevel:'很好',
        evaluateScore:'4.8',
        consumeNum:'10000+',
        feature:[
          {info:'可订今日'},
          {info:'情侣约会'},
          {info:'游轮游船'},
        ],
        price:'88',
        touristLocation:'滕王阁/南昌'
      },
      {
        id:3,
        imageSrc:'/images/tourist/zhutileyuan.png',
        touristInfoName:'南昌万达主题乐园',
        evaluateLevel:'很好',
        evaluateScore:'4.7',
        consumeNum:'30000+',
        feature:[
          {info:'随买随用'},
          {info:'亲子同乐'},
          {info:'公园游乐场'}
        ],
        price:'88',
        touristLocation:'万达茂/南昌'
      },
      {
        id:4,
        imageSrc:'/images/tourist/guotiqinghuashuishijie.jpg',
        touristInfoName:'国体清华水世界',
        evaluateLevel:'好',
        evaluateScore:'4.0',
        consumeNum:'300+',
        feature:[
          {info:'随买随用'},
          {info:'大喇叭'},
          {info:'水上乐园'}
        ],
        price:'58',
        touristLocation:'红谷滩商圈/南昌'
      }
    
    ],    
  },
  //跳转到分类景点
  toSelected:function(){
    wx.navigateTo({
      url: '/pages/selectedTouristList/selectedTouristList'
    })
  },
  // 跳转到定位选择页面
  locationChoose(){
    wx.navigateTo({   
      url: "/pages/location/location"
    })
  },
   //下拉刷新
   onPullDownRefresh:function()
   {
     wx.showNavigationBarLoading() //在标题栏中显示加载
 
     //模拟加载
     setTimeout(function()
     {
       // complete
       wx.hideNavigationBarLoading() //完成停止加载
       wx.stopPullDownRefresh() //停止下拉刷新
     },1500);
   },
  //事件处理函数  
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    if(this.data.showInfoTemp)
    this.toContent();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    if(this.data.showInfoTemp)
    this.toContent();
    
  },
  //到内容主页
  toContent(){
    let showInfoTemp='';
      setTimeout(()=> {
        showInfoTemp=false;
        this.setData({
        showUserInfo:showInfoTemp
        })
        console.log('延迟了')    
      }, 2000);
  },
  onShow(){
    let pages = getCurrentPages();
    let currPage = pages[pages.length-1];
      this.setData({//将携带的参数赋值
        place:currPage.data.place
      });
    // }
  }
})
