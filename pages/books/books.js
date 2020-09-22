// pages/books/books.js
Page({

  /**
   * Page initial data
   */
  data: {
    "bookList":[{
      bookName:"当年的那些事",
      bookId:1,
      imageUrl:"/images/book1.jpg"
    },{
      bookName:"雪地里的我们",
        bookId: 2,
        imageUrl:"/images/book2.jpg"
    },{
        bookName:"山涧之间",
        bookId: 3,
        imageUrl:"/images/book3.jpg"
    },{
        bookName:"诡秘小城",
        bookId: 4,
        imageUrl:"/images/book4.jpg"
    },{
        bookName:"鸡你太美",
        bookId: 5,
        imageUrl:"/images/book5.jpg"
    }]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  commentBook: function(){
    wx.navigateTo({
      url: '/pages/comments/comments'
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})