// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toView:'header',
    showDetail: false,
    // goods: [],
    touristSpot: [],
    recomTicket: [],
    ticketCategoryInfo: [],
    locationTemp:'',
    // good: [
    //   { id: 1, name: "niah" },
    //   { id: 2, name: "dffs" },
    //   { id: 3, name: "va" },
    //   { id: 4, name: "dom" }
    // ],
    // 旅游景点信息
    touristSpotDetail: [
      {
        id: 1,
        name: "南昌万达海洋乐园",
        location: "新建区九龙湖新区",
        imgSrc: "/images/tourist/nanchangwandahangyangleyaun.jpg",
        latitude:28.579576,
        longitude:115.790508
      },
      {
        id: 2,
        name: "滕王阁游轮有限公司",
        location: "西湖区榕门路仿古街90号滕王阁游轮",
        imgSrc: "/images/tourist/tengwangge.png",
        latitude:28.680650,
        longitude:115.880460
      },
      {
        id: 3,
        name: "南昌万达主题乐园",
        location: "新建区九龙湖新区九龙大道东侧",
        imgSrc: "/images/tourist/zhutileyuan.png",
        latitude:28.579110,
        longitude:115.786690
      },
      {
        id: 4,
        name: "国体清华水世界",
        location: "东湖区国体大道333号国体中心",
        imgSrc: "/images/tourist/guotiqinghuashuishijie.jpg",
        latitude:28.622400,
        longitude:115.823600
      }
    ],
    // 推荐门票信息
    recommendTicket: [
      {
        id: 1,
        ticketInfomation: [
          {
            ticketTitle: "南昌万达海洋乐园平日/周末大学生门票,入园前均可购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 99
          },
          {
            ticketTitle:
              "南昌万达海洋乐园平日成人票，请至少提前一天的23点30分前购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 134
          },
          {
            ticketTitle: "南昌万达海洋乐园周末成人票,请至少当天的14点前购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 167
          },
          {
            ticketTitle:
              "南昌万达海洋乐园双人票(高峰日),请至少提前一天的23点55分前购买",
            prompt: [
              { promptText: "最早可订6月9日票" },
              { promptText: "有条件退" }
            ],
            price: 318
          }
        ]
      },
      {
        id: 2,
        ticketInfomation: [
          {
            ticketTitle: "滕王阁游轮2楼贵宾厅(成人票),请至少当天的18点前购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "不可退" }
            ],
            price: 95
          },
          {
            ticketTitle: "滕王阁游轮1楼休闲厅(成人票),请至少当天的18点前购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "不可退" }
            ],
            price: 88
          }
        ]
      },
      {
        id: 3,
        ticketInfomation: [
          {
            ticketTitle: "南昌万达主题乐园全天双人票,入园前均可购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 368
          },
          {
            ticketTitle:
              "南昌万达主题乐园平日/周末全天成人票，请至少当天的16点3前购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 188
          },
          {
            ticketTitle: "南昌万达主题乐园平日/周末全天学生票，入园前均可购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 168
          },
          {
            ticketTitle: "南昌万达主题乐园平日/周末全天2大1小票,入园前均可购买",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" }
            ],
            price: 428
          }
        ]
      },
      {
        id: 4,
        ticketInfomation: [
          {
            ticketTitle: "国体清华水世界双人票,请至少提前两小时购买",
            prompt: [
              { promptText: "需提前两小时预订" },
              { promptText: "有条件退" },
              { promptText: "快速入园" }
            ],
            price: 196
          },
          {
            ticketTitle:
              "国体清华水世界平日/周末(成人票)，请至少提前两小时购买",
            prompt: [
              { promptText: "需提前两小时预订" },
              { promptText: "有条件退" },
              { promptText: "快速入园" }
            ],
            price: 188
          },
          {
            ticketTitle: "国体清华水世界(学生票)，购买后等待两小时方可使用",
            prompt: [
              { promptText: "最早可订明日票" },
              { promptText: "有条件退" },
              { promptText: "快速入园" }
            ],
            price: 58
          },
          {
            ticketTitle: "国体清华水世界(儿童票)，请至少提前两小时购买",
            prompt: [
              { promptText: "需提前两小时预订" },
              { promptText: "有条件退" },
              { promptText: "快速入园" }
            ],
            price: 68
          }
        ]
      }
    ],
    // 门票分类信息
    ticketCategory: [
      {
        id: 1,
        ticketCategoryInformation: [
          {
            ticketTotalName: "成人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 167, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 134, oldPrice: 150 },
              { ticketInfo: "平日/周末票", nowPrice: 138, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "学生票",
            tickeTotalInfo: [
              { ticketInfo: "平日/周末票", nowPrice: 99, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "双人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 318, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 256, oldPrice: 300 },
              { ticketInfo: "平日/周末票", nowPrice: 270, oldPrice: 388 }
            ]
          },
          {
            ticketTotalName: "亲子票",
            tickeTotalInfo: [
              { ticketInfo: "周末1大1小票", nowPrice: 247, oldPrice: 228 },
              { ticketInfo: "平日/周末1大1小票", nowPrice: 228, oldPrice: 288 },
              { ticketInfo: "平日1大1小票", nowPrice: 218, oldPrice: 288 },
              { ticketInfo: "平日2大1小票", nowPrice: 308, oldPrice: 399 }
            ]
          }
        ]
      },
      {
        id: 2,
        ticketCategoryInformation: [
          {
            ticketTotalName: "成人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 167, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 134, oldPrice: 150 },
              { ticketInfo: "平日/周末票", nowPrice: 138, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "学生票",
            tickeTotalInfo: [
              { ticketInfo: "平日/周末票", nowPrice: 99, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "双人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 318, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 256, oldPrice: 300 },
              { ticketInfo: "平日/周末票", nowPrice: 270, oldPrice: 388 }
            ]
          },
          {
            ticketTotalName: "亲子票",
            tickeTotalInfo: [
              { ticketInfo: "周末1大1小票", nowPrice: 247, oldPrice: 228 },
              { ticketInfo: "平日/周末1大1小票", nowPrice: 228, oldPrice: 288 },
              { ticketInfo: "平日1大1小票", nowPrice: 218, oldPrice: 288 },
              { ticketInfo: "平日2大1小票", nowPrice: 308, oldPrice: 399 }
            ]
          }
        ]
      },
      {
        id: 3,
        ticketCategoryInformation: [
          {
            ticketTotalName: "成人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 167, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 134, oldPrice: 150 },
              { ticketInfo: "平日/周末票", nowPrice: 138, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "学生票",
            tickeTotalInfo: [
              { ticketInfo: "平日/周末票", nowPrice: 99, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "双人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 318, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 256, oldPrice: 300 },
              { ticketInfo: "平日/周末票", nowPrice: 270, oldPrice: 388 }
            ]
          },
          {
            ticketTotalName: "亲子票",
            tickeTotalInfo: [
              { ticketInfo: "周末1大1小票", nowPrice: 247, oldPrice: 228 },
              { ticketInfo: "平日/周末1大1小票", nowPrice: 228, oldPrice: 288 },
              { ticketInfo: "平日1大1小票", nowPrice: 218, oldPrice: 288 },
              { ticketInfo: "平日2大1小票", nowPrice: 308, oldPrice: 399 }
            ]
          }
        ]
      },
      {
        id: 4,
        ticketCategoryInformation: [
          {
            ticketTotalName: "成人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 167, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 134, oldPrice: 150 },
              { ticketInfo: "平日/周末票", nowPrice: 138, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "学生票",
            tickeTotalInfo: [
              { ticketInfo: "平日/周末票", nowPrice: 99, oldPrice: 180 }
            ]
          },
          {
            ticketTotalName: "双人票",
            tickeTotalInfo: [
              { ticketInfo: "周末票", nowPrice: 318, oldPrice: 360 },
              { ticketInfo: "平日票", nowPrice: 256, oldPrice: 300 },
              { ticketInfo: "平日/周末票", nowPrice: 270, oldPrice: 388 }
            ]
          },
          {
            ticketTotalName: "亲子票",
            tickeTotalInfo: [
              { ticketInfo: "周末1大1小票", nowPrice: 247, oldPrice: 228 },
              { ticketInfo: "平日/周末1大1小票", nowPrice: 228, oldPrice: 288 },
              { ticketInfo: "平日1大1小票", nowPrice: 218, oldPrice: 288 },
              { ticketInfo: "平日2大1小票", nowPrice: 308, oldPrice: 399 }
            ]
          }
        ]
      }
    ]
  },
  showOrHide() {
    const bShow = this.data.showDetail;
    this.setData({
      showDetail: !bShow
      // style="display:{{show_or_hide?'block':'none'}}"
    });
  },
   switchCategory(){
     console.log('switch')
    this.setData({
      toView: 'reservationNotes'
      // 严谨性 当没有e.target.dataset.index
      // curIndex:e.currentTarget.dataset.index?e.currentTarget.dataset.index:0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const temp = options.title || 1;
    // const go = this.data.good.filter(item => {
    //   return item.id == tt;
    // });
    const touristS = this.data.touristSpotDetail.filter(item => {
      return item.id == temp;
    });
    const recom = this.data.recommendTicket.filter(item => {
      return item.id == temp;
    });
    const ticketC = this.data.ticketCategory.filter(item => {
      return item.id == temp;
    });
    const locationT=touristS[0].name
    // console.log(`temp ${locationT}`)
    this.setData({
      // goods: go[0],
      touristSpot: touristS[0],
      recomTicket: recom[0],
      ticketCategoryInfo: ticketC[0],
      locationTemp:locationT
    });
    // console.log(this.data.goods);
    console.log(this.data.touristSpot);
    console.log(this.data.recomTicket);
    console.log(this.data.ticketCategoryInfo);
     console.log(`${this.data.locationTemp}`);
  },

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