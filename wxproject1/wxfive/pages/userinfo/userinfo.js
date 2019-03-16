// pages/three/three.js
var appserver = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studata: [],
    uname:"",
    uimg:"",
    stuinfo:[],
    username:"",
    classname1:"",
    la:"",
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.userinfo1);
    var cname = options.userinfo1;
    that.setData({ uname: cname});
    
    wx.request({
      url: appserver.globalData.server + '/serchsc',
      data: { "stuname": that.data.uname },
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