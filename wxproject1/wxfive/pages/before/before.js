// pages/before/before.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textinfo:"杨梅杏脯",
    text1: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(that.data.textinfo.length);

    let index = 0;
     //定时函数
     let task=setInterval(function(){
       index++;
       console.log("index-->" + index);
       //判断如果字符的下标超过了长度，结束定时任务，跳转页面
       if(index > that.data.textinfo.length)
       {
         //取消这个定时函数
         clearInterval(task);

         //马上接着跳转页面
         wx.navigateTo({
           url: '../activeimg/activeimg',
         })
       }
       that.setData({ text1: that.data.textinfo.substring(0, index) });
     }, 100000)

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