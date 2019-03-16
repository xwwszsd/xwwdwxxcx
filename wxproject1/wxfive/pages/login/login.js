// pages/five/five.js
var app = getApp();
Page({


  /**
   * 页面的初始数据
   */
  data: {
    codevalue: "",
    imgpath: [],
    username: "",
    pwd: "",
    code: "",
    fanhui:"",
    sta:"1",
    select: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    
    index: 0//选择的下拉列表下标
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },


  restcode: function (event) {
    var that = this;
    wx.request({
      url: app.globalData.server + '/restcode',

      header: { "content-type": "application/json" },
      success: function (resp) {
        console.log(resp.data.codeval);
        var codeval = resp.data.codeval;

        that.setData({ codevalue: codeval });

        console.log("验证码生成成功！");
      },
      fail: function (resp) {
        console.log("验证码生成失败！");
      }
    })

  },
  xzry(eve){
    console.log(eve);
    this.setData({
      show: !this.data.show
    })
  },
  inputname: function (event) {
    console.log(event.detail.value);
    var username = event.detail.value;
    console.log(username);
    var that = this;
    that.setData({ username: username })
  },
  inputpwd: function (event) {
    console.log(event.detail.value);
    var userpwd = event.detail.value;
    console.log(userpwd);
    var that = this;
    that.setData({ pwd: userpwd })
  },
  inputcode: function (event) {
    console.log(event.detail.value);
    var code = event.detail.value;
    var that = this;
    that.setData({ code: code })
  },
  btnclick: function (event) {
    var that = this;
    console.log(event);

    console.log(that.data);
    var logincode = that.data.code;
    var codevalue = that.data.codevalue;
    if (logincode == codevalue) {
      wx.request({
        url: app.globalData.server + '/checkLogin',
        data: { "username": that.data.username, "pwd": that.data.pwd,"sta":that.data.sta },
        header: { "content-type": "application/json" },
        success: function (resp) {
          var uname = that.data.username;
          console.log(uname);
          console.log(resp.data.checkflog);
          var result = resp.data.checkflog;
          if (result == "None") {
            console.log("你输入的用户名或密码不正确!");
            that.setData({ fanhui: "你输入的用户名或密码不正确!" });
            
          }
          else if (result == "0") {
            console.log("你的状态不对！");
            that.setData({ fanhui: "你的状态不对！" });
          
          }
          else if (result == "2"){
            wx.navigateTo({
              url: '../gly/gly?userinfo1=' + uname,
            })
          }
          else {
            that.setData({sta:"1"});
            
            var cate_id = uname;
            console.log("cate_id" + cate_id);
            app.globalData.cate_id = cate_id;//设置全局变量(app已经定义 var app=getApp())
            wx.switchTab({
              
              url: '../main/main?userinfo1=' + uname,
            })
          }

        }
      })

    }
    else {
      console.log("验证码错误");
      that.setData({ fanhui: "验证码错误!" });
      
    
     
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.server + '/loadcode',

      header: { "content-type": "application/json" },
      success: function (resp) {
        console.log(resp.data.codeval);
        var codeval = resp.data.codeval;
        var imgpaths = resp.data.imgpath;
        that.setData({ codevalue: codeval });
        that.setData({ imgpath: imgpaths });
        console.log("验证码生成成功！");
      },
      fail: function (resp) {
        console.log("验证码生成失败！");
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