// pages/bjxx/bjxx.js
var  appserver = getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    tips: '加载中',
    step: 0,
    cate_id: "",
    studata: [],
    uname: "",
    uimg: "",
    stuinfo: [],
    username: "",
    classname1: "",
    la: "",
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   
    
    var cate_id = appserver.globalData.cate_id;
    console.log("cate_id--+>" + cate_id);
    console.log(typeof cate_id);
    if (cate_id == "" || cate_id==null)
    {
      

      wx.showModal({
        title: '提示',
        content: '请先登录',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({

              url: '../main/main',
            })

          }

        }
      })


      
    }
    else{
      var that = this;
      that.setData({ uname: cate_id});

      wx.request({
        url: appserver.globalData.server + '/serchsc',
        data: { "stuname": cate_id},
        header: { "content-type": "application/json" },
        success: function (res) {
          console.log(res.data.stuinfo);
          console.log(res.data.stuimg);
          console.log(res.data.classname);
          that.setData({ stuinfo: res.data.stuinfo });
          that.setData({ classname1: res.data.classname });
          that.setData({ uimg: res.data.stuimg });
          that.setData({ la: res.data.la });
        }
      })

      // wx.navigateTo({
        
      //   url: '../userinfo/userinfo?userinfo1=' + cate_id,
      // })
    }

  },
  lookall: function (event) {
    console.log(event.currentTarget.dataset.stuname);
    var stuname = event.currentTarget.dataset.stuname;
    wx.navigateTo({
      url: '../stuinfo/stuinfo?uerall=' + stuname,
    })
  },
  clickphone: function (event) {

    console.log(event.currentTarget.dataset.phone);
    var phonenumber = event.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phonenumber,
      success: function (res) {
        console.log("拨打成功！");
      },
      fail: function (res) {
        console.log("拨打失败！");
      }
    })
  },

  clickemail: function (event) {
    console.log(event.currentTarget.dataset.email);

    var emails = event.currentTarget.dataset.email;
    wx.navigateTo({
      url: '../email/email?mailnum=' + emails,
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var me = this;
    // var cxt = wx.createCanvasContext('canvasCircle');
    // cxt.setLineWidth(6);
    // cxt.setStrokeStyle('#eaeaea');
    // cxt.setLineCap('round');
    // cxt.beginPath();
    // cxt.arc(100, 100, 96, 0, 2 * Math.PI, false);
    // cxt.stroke();
    // cxt.draw();
    // //加载动画
    // var steps = 1, startAngle = 1.5 * Math.PI, endAngle = 0, speed = 100, sec = 100;
    // function drawing(s, e) {
    //   var context = wx.createCanvasContext('canvasRing');
    //   context.setLineWidth(6);
    //   context.setStrokeStyle('#11be0f');
    //   context.setLineCap('round');
    //   context.beginPath();
    //   context.arc(100, 100, 96, s, e, false);
    //   context.stroke();
    //   context.draw();
    // }
    // function drawLoading() {
    //   if (steps < 101) {
    //     //这里用me,同步数据,渲染页面
    //     me.setData({
    //       step: steps
    //     })
    //     endAngle = steps * 2 * Math.PI / speed + startAngle;
    //     drawing(startAngle, endAngle);
    //     steps++;
    //     console.log(steps);
    //   } else {
    //     clearInterval(this.interval);
    //   }
    // }
    // this.interval = setInterval(drawLoading, sec);
  
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