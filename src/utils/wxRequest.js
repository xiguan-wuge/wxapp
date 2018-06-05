
import wepy from 'wepy';
import util from '@/utils/util';
import md5 from '@/utils/md5';
// 统一小程序wx.request请求
// 函数 url,params，get POST 


// @params json query 传查询参数 method 方法
const API_SECRET_KEY='www.mall.cycle.com'
const TIMESTAMP=util.getCurrentTime();
const SION=md5.hex_md5((TIMESTAMP+API_SECRET_KEY).toLowerCase());
// es6 形参赋初值
const wxRequest=async(params={},url)=>{

  let data=params.query||{};
  // 在请求的过程中带上时间戳
  data.time=TIMESTAMP;
  data.sion=SION;

  // 将执行结果赋值给res
  let res=await wepy.request({
    url:url,
    method:params.method||'GET',
    data:data,
    header:{'Content-Type':'application/json'}
  });
  return res
}
module.exports={
  wxRequest
}