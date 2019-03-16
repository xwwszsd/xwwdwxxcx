// pages/bjxx/bjxx.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: '加载中',
    step: 0,
    cate_id: "",
    uname: "",

    querygr: {},
    querybj: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    

    var cate_id = app.globalData.cate_id;
    console.log("cate_id--+>" + cate_id);
    console.log(typeof cate_id);
    if (cate_id == "" || cate_id == null) {


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
    else {
     
      wx.request({
        url: app.globalData.server + '/grxx',
        data: { "username": cate_id },
        header: { "content-type": "application/json" },
        success:function(res){
          console.log(res.data.querygr);
          console.log(res.data.querybj);
          that.setData({ querygr: res.data.querygr });
          that.setData({ querybj: res.data.querybj });
        }
      })
      // wx.navigateTo({

      //   url: '../grxx/grxx?userinfo1=' + cate_id,
      // })
    }

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