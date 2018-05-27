// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn_disabled:true,
    dorm:{
      name:'默认寝室',
      tip:{
        content:'研一927',
        color:'green'
      }
    },
    amounts:[
      {
        value: 50,
        checked:false
      },
      {
        value: 100,
        checked:false
      },
      {
        value: 150,
        checked:false
      },
      {
        value: 200,
        checked:false
      },
      {
        value: 250,
        checked:false
      }

    ]
  },
  bindAmountChange(e){
    // console.log(e.detail.value)
    let amounts=this.data.amounts;
    let strVal=e.detail.value;
    for(let amount of amounts){
      amount.checked=amount.value==strVal
    }
    this.setData({
      amounts,
      btn_disabled:false
    })
  }

  
})