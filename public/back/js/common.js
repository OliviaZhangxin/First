//使用NProgres控制页面ajax请求的进度条

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