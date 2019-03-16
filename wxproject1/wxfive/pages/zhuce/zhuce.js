// pages/zhuce/zhuce.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imgpath:"",
     studentname:"",
     stupwd:"",
     stuid:"",
     stusex:"",
     valueimg:""
  },
  //从页面获取数据 设置到data里
  checkonly1:function(event){
    var that=this;
    console.log(event.detail.value);
    var stuname = event.detail.value;
    
    that.setData({ studentname: stuname});
  },
  checkonly: function (event) {
    var that = this;
    console.log(event.detail.value);
    var studentsid = event.detail.value;

    that.setData({ stuid: studentsid });
  },
  checkonly2: function (event) {
    var that = this;
    console.log(event.detail.value);
    var studentpwd = event.detail.value;

    that.setData({ stupwd: studentpwd });
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var that=this;
    var checksex = e.detail.value;
    that.setData({ stusex: checksex});
  },
  //失去焦点
  lostfouce:function(event){
     var that=this;
     wx.request({
       url: app.globalData.server +'/checkonlyuser',
       data: { "studentname": that.data.studentname},
       header:{"content-type":"application/json"},
       success:function(res){
         
         that.setData({ valueimg: res.data.flag});
       }
     })
  },
  //上传图片
  uploadimg:function(){
     var that=this;
     wx.chooseImage({
       count:1,
       sizeType: ["compressed"],
       sourceType: ["album","camera"],
       success: function(res) {
          var temppath=res.tempFilePaths;
          console.log("选择的图片为：",temppath);
          that.setData({ imgpath: temppath[0]});
          uploadimg(that,temppath[0]);
       },
     })
     function uploadimg(page,path){
        wx.showToast({
          icon:'loading',
          title: '正在上传',
        }),
        wx.uploadFile({
          url: app.globalData.server +'/uploadfile' ,
          filePath: path,
          name: 'fileimg',
          header:{"content-type":"multipart/form-data"},
          success:function(res){
             console.log(res.data);
          }
        })
     }
  },

  submitinfo: function (events, path){
      console.log(events);
      var that=this;
      console.log(that.data.stuid);
      console.log(that.data.studentname);
    
    console.log(that.data.stupwd);
    console.log(that.data.stusex);
   wx.request({
     url: app.globalData.server +'/insert',
     data: { "stuid": that.data.stuid, "stuname": that.data.studentname, "stupwd": that.data.stupwd, "stusex": that.data.stusex},
    
     header:{"content-type":"application/json"},
     success:function(res){
       console.log(res);
     }
   })
    
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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