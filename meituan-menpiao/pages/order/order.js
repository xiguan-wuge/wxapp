// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketNum:1,
    unitPrice:99,
    totalPrice:99,
    minusIconPath:'/images/icons/icon_minus.png',
    nameInput:'张三',
    telInput:'15797733251',
    index:0 
  },
  //切换门票时间
  switchTab(e){
    let index=e.currentTarget.dataset.index;
    let goods=this.data.goods;
    if(index==0){
      this.setData({
        index:0
      })      
    }else if(index==1){
      this.setData({
        index:1
      })
    }
  },
   //门票数量减
  addNum: function(){
    var ticketNumber=this.data.ticketNum+1;
    var totalPriceNumber=this.data.unitPrice*ticketNumber;
    if(ticketNumber>1){
      var that=this;
      wx.getImageInfo({
        src: this.data.minusIconPath,
        success: function(res){
         res.src='/images/icons/icon_minus_color.png';
         that.setData({
           minusIconPath:res.src
         })
        }
      })
    } 
    this.setData({
      ticketNum:ticketNumber,
      totalPrice:totalPriceNumber
    })
  },
  //门票数量加
  subtractNum:function(){
    var ticketNumTemp=this.data.ticketNum;
    if(ticketNumTemp>1){
      ticketNumTemp--;
      var totalPriceNumber=this.data.unitPrice*ticketNumTemp;
      this.setData({
      ticketNum:ticketNumTemp,
      totalPrice:totalPriceNumber
    });
    }else{
      var that=this;
      wx.getImageInfo({
        src: this.data.minusIconPath,
        success: function(res){
         res.src='/images/icons/icon_minus.png';
         that.setData({
           minusIconPath:res.src
         })
        }
      })
    }
  },
  //获取输入的姓名
  nameInput(e){
    this.data.nameInput=e.detail.value.trim();
    this.setData({
      nameInput:e.detail.value
    })
  },
  //获取输入的手机号
  telInput(e){
    this.data.telInput=e.detail.value.trim();
    this.setData({
      telInput:e.detail.value
    })
  },
  //提交判断时判断数据是否规范
  orderSubmit(){
    let telInputTemp=this.data.telInput;
    let nameInputTemp=this.data.nameInput;
    if(nameInputTemp==''){
      wx.showModal({
        title:'提示',
        content:'姓名不能为空',
        showCancel:false,
        success(res){
        }
      })
    }
    if(telInputTemp==''){
      wx.showModal({
        title:'提示',
        content:'手机号不能为空',
        showCancel:false,
        success(res){        
        }
      })
    }
    //判断手机号码是否规范
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(telInputTemp))){ 
      wx.showModal({
          title:'提示',
          content:'请输入正确的手机号',
          showCancel:false,
          success(res){
          
          }
        })
        return false;
        
    } 
    console.log('处理了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})