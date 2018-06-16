// pages/location/location.js
const app = getApp();
function search(arrayName, value) {
  // console.log(arrayName);
  return arrayName.filter(function(arrayName) {
    // es6 match方法
    return arrayName.cityName.match(value);
  });
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    place: "南昌",
    searchAnswer:[],
    showAnswer:false,
    inputValue: "",
    hotCity: [
      { name: "北京" },
      { name: "上海" },
      { name: "广州" },
      { name: "深圳" },
      { name: "天津" },
      { name: "西安" },
      { name: "杭州" },
      { name: "成都" },
      { name: "南京" }
    ],
    cityList: [
      {
        characterName: "A",
        characterCity: [
          { cityName: "安溪" },
          { cityName: "安化" },
          { cityName: "安岳" },
          { cityName: "阿荣旗" },
          { cityName: "安州区" },
          { cityName: "阿贝" },
          { cityName: "安州" },
          { cityName: "安吉" },
          { cityName: "阿图什市" },
          { cityName: "澳门" }
        ]
      },
      {
        characterName: "B",
        characterCity: [
          { cityName: "百色" },
          { cityName: "北京" },
          { cityName: "博兴" },
          { cityName: "北培" },
          { cityName: "保山" },
          { cityName: "巴州" },
          { cityName: "波尔塔拉" },
          { cityName: "北镇市" },
          { cityName: "保定" },
          { cityName: "滨州" }
        ]
      },
      {
        characterName: "C",
        characterCity: [
          { cityName: "长春" },
          { cityName: "长寿" },
          { cityName: "潮安" },
          { cityName: "赤水" },
          { cityName: "滁州" },
          { cityName: "长汀" },
          { cityName: "巢湖" },
          { cityName: "朝阳" },
          { cityName: "慈利" },
          { cityName: "池州" }
        ]
      }
    ],
    characters: [
      { char: "A" },
      { char: "B" },
      { char: "C" },
      { char: "D" },
      { char: "D" },
      { char: "E" },
      { char: "F" },
      { char: "G" },
      { char: "H" },
      { char: "I" },
      { char: "J" },
      { char: "K" },
      { char: "L" },
      { char: "M" },
      { char: "N" },
      { char: "O" },
      { char: "P" },
      { char: "Q" },
      { char: "R" },
      { char: "S" },
      { char: "T" },
      { char: "U" },
      { char: "V" },
      { char: "W" },
      { char: "X" },
      { char: "Y" },
      { char: "Z" }
    ]
  },
  // 传城市名字回主页
  cityBack(e) {
    let placeTemp = e.currentTarget.dataset.name;
    console.log(e.currentTarget.dataset.name);
    let pages = getCurrentPages(); //当前页面
    let prevPage = pages[pages.length - 2]; //上一页面
    prevPage.setData({
      //直接给上移页面赋值
      place: placeTemp
    });
    wx.navigateBack({
      //返回
      delta: 1
    });
  },
  bindKeyInput(e) {
    console.log(e)
    console.log(e.detail.value)
    // 用正则判断输入的值是否为空，若为空则不展现搜索结果
    let inputcity = e.detail.value.replace(/\s+/g, '');
    if(inputcity==''){
      this.setData({
        showAnswer:false
      })
      return 
    }
    this.setData({
      inputValue: e.detail.value
    });
    
    var result =[]
    var tempCity = this.data.cityList;
    for (var i = 0; i < tempCity.length; i++) {
      var cityTemp = tempCity[i].characterCity;
      var result1 =[]
      result1 = new search(cityTemp, this.data.inputValue)
      if(result1.length>=1){
      result = [...result,...result1]     
    }
     console.log(result);
     this.setData({
       searchAnswer:result,
       showAnswer:true
     })
     
    }
    // 循环输出查询结果
    for(var i=0;i<this.data.searchAnswer.length;i++){
      console.log(this.data.searchAnswer[i].cityName)
    }
  },
  // 去除input框内容
  clearInput(){
    this.setData({
      inputValue:'',
      showAnswer:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
