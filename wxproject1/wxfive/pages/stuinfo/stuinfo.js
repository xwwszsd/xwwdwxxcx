// pages/two/two.js
var appserver = getApp();
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {
  

    username: "",
    // imgfacepath:"",

    userInfo: {},

    usermusic:"",

  },
 

 

  callphone: function (event) {
    console.log(event.currentTarget.dataset.phon);
    var phonenum = event.currentTarget.dataset.phon;
    wx.makePhoneCall({
      phoneNumber: phonenum,
      success: function (res) {
        console.log("拨打成功！");
      },
      fail: function (res) {
        console.log("拨打失败！");
      }

    })
  },


  clickaudio: function (event) {
   /* console.log(event.currentTarget.dataset);

    var myaudio = event.currentTarget.dataset;

    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = myaudio;

    innerAudioContext.onPlay(() => {
      console.log("开始播放")

    })*/
   var that=this;
    var mmu = that.data.usermusic;
    wx.playBackgroundAudio({
      dataUrl: mmu,
      title: '未知歌名',
      coverImgUrl: ''
    })
    console.log("---->" + that.data.usermusic);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("------------"+options.uerall);
    var that=this;
    wx.request({
      url: appserver.globalData.server +'/query',
      data: { "username": options.uerall},
      header:{"content-type":"application/json"},
      success:function(res){
        var mu = res.data.usermusic1;
        that.setData({ "userInfo":res.data.userInfo});
        that.setData({ "usermusic": mu});
        console.log("-----" + mu);
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