//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log(testDrive)

// 在page里得到app
const app = getApp()

Page({
  data: {
    slides:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },  
  //key 和value一样可以省略
  testDrive,
  readMore(event){
    const id=event.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`
    })
  }
  
  
})
