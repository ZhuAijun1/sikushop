$(function(){
    $('#loginheader').load('loginheader.html')
    $("button").click(function(){
        var username = $(".username").val()
        var password = $(".password").val()
        if(username == ""||password== ""){
            $(".user-password").css({display:"none"})
            $(".user-name").css({display:'block'})
            $(".username").val("")
            $(".password").val("")
        }else{
            $(".user-name").css({display:'none'})
            $.get("http://jx.xuzhixiang.top/ap/api/login.php",{'username':username,'password':password},(data)=>{
                console.log(data)
                if(data.code == 1){
                    var userObj={}
                    userObj.id = data.data.id
                    userObj.name = data.data.username
                    userObj.token = data.data.token
                    console.log(userObj)   
                    localStorage.setItem("userObj",JSON.stringify(userObj))
                    location.replace("index.html")
                }else{
                    $(".user-password").css({display:"block"}).html(data.msg)
                    $(".username").val("")
                    $(".password").val("")
                }
            })
        }
    })











})