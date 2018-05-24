//index.js
//获取应用实例
import goods from '../../api/goods.js'
const app = getApp()

Page({
  data: {
    num:1,
    show:false,
    totalNum:0,
    scaleCart:false,
    goods:null,
    index:0,
    info:goods[1].detail
  },
  onLoad (options){
    let id=options.id || 2;
    let curGoods;
    for(let i=0;i<goods.length;i++){
      if(goods[i].id===id){
        curGoods=goods[i];
        break;
      }
    }
    setTimeout(()=>{
      this.setData({
        goods:curGoods
      });
    },1000)
    this.setData({
      goods
    });
    console.log(this.goods)
    // console.log('假的')
  },
  addCount(){
    let num=++this.data.num; 
    const total=this.data.totalNum;
    this.setData({
      num
    })
  },
  addToCart(){
    const num=this.data.num;
    const total=this.data.totalNum;
    this.setData({
      show:true
    });
    setTimeout(()=>{
      this.setData({
        show:false,
        scaleCart:true
      });
      setTimeout(()=>{
        this.setData({
          scaleCart:false,
          hasCarts:true,
          totalNum:num+total
        })
      },500)
    },800)
  },
  switchTab(e){
    let index=e.currentTarget.dataset.index;
    let goods=this.data.goods;
    if(index==0){
      this.setData({
        info:goods.detail,
        index:0

      })
      
    }else if(index==1){
      this.setData({
        info:goods.parameter,
        index:1
      })
    }else{
      this.setData({
        info:goods.service,
        index:2
      })
    }
  }
})
