// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      addName:'',
      addTel:'',
      addAddress:''
    }
  },
  setNameInput:function(e){
    // console.log(e.detail.value)
    this.setData({
     ["address.addName"]:e.detail.value.trim(),
    })
  },
  setTelInput:function(e){
    // console.log(e.detail.value)
    this.setData({
      ["address.addTel"]:e.detail.value.trim(),
    })
  },
  setAddressInput:function(e){
    // console.log(e.detail.value)
    this.setData({
      ["address.addAddress"]:e.detail.value.trim(),
    })
  },
  hasAllFill:function(e){
    console.log(e)
    let name=e.detail.data.address.name;
    console.log(name)

  },
  userInfoSubmit:function(e){
    // console.log(e.detail),
    // this.setAddress();
    //  console.log(['address.addName'])
    if(this.data.address.addName==''&&this.data.address.addTel==''&&this.data.address.addAddress==''){
      console.log('空')
      wx.showModal({
        title:"提示",
        content:'请输入完整信息',
        showCancel:false,
        success:function(res){
          return;
        }
      })
    }
    wx.setStorage({
      key: 'address',
      data: this.data.address,
      success: function(res){
        // success
        console.log('缓存成功')
      },
      fail: function() {
        // fail
        console.log('缓存失败')
      },
      complete: function() {
        // complete
      }
    })
  },
})