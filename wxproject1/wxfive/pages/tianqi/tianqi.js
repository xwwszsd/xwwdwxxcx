// pages/weather/weather.js
var app = getApp();
var day = ["今天", "明天", "后天"];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    update: '',
    basic: {},
    today: {},
    tomorrow: {},
    afterTomor: {},
    todyIcon: '../img/weather/999.png',
    tomorrowIcon: '../img/weather/999.png',
    afterTomorIcon: '../img/weather/999.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    that.getLocation();
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
    this.getLocation();
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getWeatherInfo(latitude, longitude);
      }
    })
  },
  getWeatherInfo: function (latitude, longitude) {
    var that = this;
    var key = 'HE1903131739321784';//你自己的key
    //需要在微信公众号的设置-开发设置中配置服务器域名
    var url = 'https://free-api.heweather.net/s6/weather?key=' + key + '&location=' + longitude + ',' + latitude;
    
    wx.request({
      url: url,
      data: {},
      method: 'GET',
      
      success: function (res) {
        var daily_forecast_today = res.data.HeWeather6[0].daily_forecast[0];//今天预报
        var daily_forecast_tomorrow = res.data.HeWeather6[0].daily_forecast[1];//明天天预报
        var daily_forecast_afterTomor = res.data.HeWeather6[0].daily_forecast[2];//后天预报
        var basic = res.data.HeWeather6[0].basic;
        var update = res.data.HeWeather6[0].update.loc;//更新时间
        console.log(res.data.HeWeather6);
        that.setData({"update": update});
        that.setData({"basic": basic});
        that.setData({"today": daily_forecast_today});
        that.setData({"tomorrow": daily_forecast_tomorrow});
        that.setData({"afterTomor": daily_forecast_afterTomor });
        that.setData({todyIcon: '../img/weather/' + daily_forecast_today.cond_code_d + '.png'}); //在和风天气中下载天气的icon图标，根据cond_code_d显示相应的图标
        that.setData({ tomorrowIcon: '../img/weather/' + daily_forecast_tomorrow.cond_code_d + '.png' });
        that.setData({ afterTomorIcon: '../img/weather/' + daily_forecast_afterTomor.cond_code_d + '.png' });
  }
    })
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