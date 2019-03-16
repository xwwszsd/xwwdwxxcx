// pages/juhe1/juhe1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgdatas: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var curobj = this;
    wx.request({
      url: 'http://toutiao-ali.juheapi.com/toutiao/index',
      data: { "type": "guonei" },
      header: {
        "content-type": "applicatioin/json",
        "Authorization": "APPCODE 6f982ee12ea04098a68ade3688eb1cd6"
      },
      success: function (response) {
        console.log(response.data.result.data);
        curobj.setData({ imgdatas: response.data.result.data })
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