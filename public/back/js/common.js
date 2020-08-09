$(function(){
    //1-使用NProgres控制页面ajax请求的进度条

    // 不显示小圈圈
    NProgress.configure({showSpinner:false})
    //注册全局事件，所有的ajax请求只要开始就会触发：开启进度条
    $(document).ajaxStart(function(){
        NProgress.start()
    })
    //注册全局事件，所有的ajax请求结束时时，触发：结束进度条
    $(document).ajaxStop(function(){
        NProgress.done()
    })

    // 2-二级导航展开、合并
    $('.second-link').on('click',function(){
        $('.second').slideToggle()
    })

    // 3-点击显示/隐藏侧边栏
    /*
    1.给侧边栏添加hidemeau类名
    2.给topbar去掉pl-180类名
    3.给body去掉pl-180类名
    */
   $('.lt-topbar .menu').on('click',function(){
       $('.lt-aside').toggleClass('hideMenu')
       $('.lt-topbar,body').toggleClass('pl-180')
   })

//    4-点击退出，删除用户的登录成功的标记
   $('.btn-ok').on('click',function(){
    //    向后台发送ajax请求
        $.ajax({
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(info){
                // 请求成功：1.隐藏模态框2.跳转至登录页
                if(info.success){
                    $('.modal-logout').hide()
                    location.href='./login.html'
                }
            }
        })
   })
})
