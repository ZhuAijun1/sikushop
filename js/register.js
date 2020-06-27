$('#loginheader').load('loginheader.html')
$('#register').click(function(){
    var username = $("#userid").val()
    var password = $("#password").val()
    var password1 = $("#password1").val()
    console.log(username,password)
    if(password == password1){
        $.get('http://jx.xuzhixiang.top/ap/api/reg.php',{username:username,password:password},function(data){
            console.log(data)
            if(data.code == 0){
                alert(data.msg)
                $("#userid").val("")
                $("#password").val("")
                $("#password1").val("")

            }else if(data.code == 1){
                alert(data.msg)
                location.replace("login.html")
            }
        })
    }else{
        alert('两次密码需要一致')
        $("#userid").val("")
        $("#password").val("")
        $("#password1").val("")
    }
    
})