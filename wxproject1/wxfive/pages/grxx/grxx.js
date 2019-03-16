// pages/grxx/grxx.js
var appserver = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    uname: "",
 
    querygr:{},
    querybj:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.userinfo1);
    var cname = options.userinfo1;
    that.setData({ uname: cname });

    wx.request({
      url: appserver.globalData.server + '/grxx',
      data: { "username": that.data.uname },
      header: { "content-type": "application/json" },
      success: function (res) {
        console.log(res.data.querygr);
        console.log(res.data.querybj);
        that.setData({ querygr: res.data.querygr});
        that.setData({ querybj: res.data.querybj });
      }
    })

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