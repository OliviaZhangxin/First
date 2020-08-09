$(function(){
    
    var currentPage=1
    var pageSize=5
    var currentId=null
    var isDelete=null
    //1-发送ajax请求获取第一屏数据并渲染
    render()
    function render(){
        $.ajax({
            url:'/user/queryUser',
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            dataType:'json',
            success:function(info){
                console.log(info)
                // 绑定模板引擎，进行渲染
                $('tbody').html(template('tmp',info))
                //根据获取到的数据调用分页方法进行分页
                setPage(info.total)
    
            }
        })
    }

    //2-用户数据分页
    
    function setPage(total){
        $("#paginator").bootstrapPaginator({
            bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
            currentPage:currentPage,//当前页
            totalPages:Math.ceil(total/pageSize),//总页数
            size:"small",//设置控件的大小，mini, small, normal,large
            onPageClicked:function(event, originalEvent, type,page){
              //为按钮绑定点击事件 page:当前点击的按钮值
              console.log(page)
              currentPage=page
              render()
            }
      
      });
    }
    
    // 3-点击操作按钮，记录当前的数据，以及要进行的操作
    // 事件委托
    $('tbody').on('click','.btn',function(){
        // currentId=$(this).parent().attr('data-id')
        currentId=$(this).parent().data('id')
        console.log(currentId)
        isDelete=$(this).hasClass('btn-success')?1:0
    })
    // 4-点击模态框的确定按钮，向后台发送请求，对当前数据进行操作
    $('.btn-yes').on('click',function(){
        //向后台发送请求，禁用或启用指定ID用户
        $.ajax({
            url:'/user/updateUser',
            type:'post',
            dataType:'json',
            data:{
                id:currentId,
                isDelete:isDelete
            },
            success:function(info){
                render()
                // 隐藏模态框
                $('.modal').modal('hide')
            }
        })
    })

})