$(function(){
    //使用表单校验插件
$('#form').bootstrapValidator({
    //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
    excluded: [':disabled', ':hidden', ':not(:visible)'],
  
    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
  
    //3. 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 3,
            max: 12,
            message: '用户名长度必须在2到12之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '用户名由数字字母下划线和.组成'
          },
        //   拓展验证规则
          callback:{
              message:'用户名不存在'
          }

        }
      },
      password:{
          validators:{
              notEmpty:{
                  message:'密码不能为空'
              },
              stringLength:{
                  min:6,
                  max:12,
                  message:'密码必须在6-12位之间'
              },
              callback:{
                  message:'密码错误'
              }

          }
      }
    }
  });

//   2.重置表单样式
$('.btn-reset').on('click',function(){
    //点击重置按钮，重置表单值及样式
    $('#form').data('bootstrapValidator').resetForm()
})

// 3.表单验证成功，发送ajax给后台
$('#form').on('success.form.bv',function(e){
    //阻止浏览器的默认行为
    // console.log('sucess')
    e.preventDefault()
    //使用ajax提交数据
    $.ajax({
        url:'/employee/employeeLogin',
        type:'post',
        data:$('#form').serialize(),//表单序列化：拼接
        dataType:'json',
        success:function(info){
            if(info.success){
                //验证成功，跳转至首页
                location.href='./index.html'
            }else if(info.error===1000){
                // 验证失败，将用户名字段修改为验证失败状态，并且提示信息：用户名不存在
                $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
            }else {
                $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
            }
        }
    })
})
})