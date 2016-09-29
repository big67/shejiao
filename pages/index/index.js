//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    swiperData: [ 
        {
            img: 'http://img2.fengniao.com/192_module_images/240/57d679e1398ee.jpg',
            text: 'Elliott Erwitt：最会拍狗狗的玛格南摄影师',
            url: 'http://image.fengniao.com/slide/533/5338790_1.html#p=1'
        }, 
        {
            img: 'http://img2.fengniao.com/192_module_images/240/57ec7127e1634.jpg',
            text: '"边缘生活 摄影师记录圣地亚哥贫民区的生活（上）',
            url: 'http://image.fengniao.com/slide/533/5339284_1.html#p=1'
        }, 
        {
            img: 'http://img2.fengniao.com/192_module_images/240/57ea04484c2f1.jpg',
            text: '电影放映员拍40年地铁 纪录伦敦的人生百态',
            url: 'http://image.fengniao.com/slide/533/5339162_1.html#p=1'
        }
    ],

    postsList: [
        {
            id:'0',
            author:{   
                avatar_url:'../../image/addison.png',
                loginname:'Master Chen'
            },
            top:false,
            good:false,
            last_reply_at:'1小时前',
            title:'Let\'s take some photos',
            reply_count:'10',
            visit_count:'100'
        },
        {
            id:'1',
            author:{   
                avatar_url:'../../image/Lee.png',
                loginname:'Master Lee'
            },
            top:false,
            good:false,
            last_reply_at:'2小时前',
            title:'I\'m master of light',
            reply_count:'5',
            visit_count:'150'
        },
                {
            id:'2',
            author:{   
                avatar_url:'../../image/addison.png',
                loginname:'Master Chen'
            },
            top:false,
            good:false,
            last_reply_at:'1小时前',
            title:'Let\'s take some photos',
            reply_count:'10',
            visit_count:'100'
        },
        {
            id:'3',
            author:{   
                avatar_url:'../../image/Lee.png',
                loginname:'Master Lee'
            },
            top:false,
            good:false,
            last_reply_at:'2小时前',
            title:'I\'m master of light',
            reply_count:'5',
            visit_count:'150'
        },
        {
            id:'4',
            author:{   
                avatar_url:'../../image/addison.png',
                loginname:'Master Chen'
            },
            top:false,
            good:false,
            last_reply_at:'1小时前',
            title:'Let\'s take some photos',
            reply_count:'10',
            visit_count:'100'
        },
        {
            id:'5',
            author:{   
                avatar_url:'../../image/Lee.png',
                loginname:'Master Lee'
            },
            top:false,
            good:false,
            last_reply_at:'2小时前',
            title:'I\'m master of light',
            reply_count:'5',
            visit_count:'150'
        }

    ],

        background: ['green', 'red', 'yellow'],
        indicatorDots: false,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000

  },
  onLoad: function () {
    console.log('onLoad')

  },

changeIndicatorDots: function (e) {
    this.setData({
        indicatorDots: !this.data.indicatorDots
    })
},
changeVertical: function (e) {
    this.setData({
        vertical: !this.data.vertical
    })
},
changeAutoplay: function (e) {
    this.setData({
        autoplay: !this.data.autoplay
    })
},
intervalChange: function (e) {
    this.setData({
        interval: e.detail.value
    })
},
durationChange: function (e) {
    this.setData({
        duration: e.detail.value
    })
}


})