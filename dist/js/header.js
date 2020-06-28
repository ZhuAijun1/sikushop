if(JSON.parse(localStorage.getItem("userObj"))){
    $(".deng .denglu").css({display:"none"})
    $(".deng .zhuce").css({display:"none"})
    $(".deng .huanying").css({display:"block"}).html(JSON.parse(localStorage.getItem("userObj")).name)
    $(".deng .tui").css({display:"block"})
}
// $.get("../json/daohang.json",data=>{
//     console.log(data)
//     for(let i = 0;i<data.length;i++){

//     }
// })
$('.daohang a').hover(function(){
    var _index = $(this).index()
    $(".xiala .xiala-cen").css({margin:"50 auto"})
    $('.xiala .xiala-box').eq(_index).css({
        display:'block'
    })
},function(){
    var _index = $(this).index()
    $(".xiala .xiala-cen").css({margin:"0 auto"})
    $('.xiala .xiala-box').eq(_index).css({
        display:'none'
    })
})
$('#header .choose .language .ce').click(function(){
$('#header .choose .language .xuanze').slideToggle();
})
$('.nav .search').click(function(){
    $('.nav .search p').css({color:'white'})
    $('.nav .search input').animate({width:'160px'})
})
$('.nav .search input').blur(function(){
    $(this).animate({width:'0px'})
    $('.nav .search p').css({color:'#ffb81c'})
})
$("#header .choose .deng .tui").click(function(){
    localStorage.removeItem("userObj")
    $(this).css({display:"none"})
    $("#header .choose .deng .denglu").css({display:"block"})
    $("#header .choose .deng .huanying").css({display:"none"})
})
$(".xingxing").click(function(){
    if(localStorage.getItem("userObj") == null){
        alert("请先登录账号，才能查看购物车")
        
        location.replace("login.html")
    }else{
        location.replace("car.html")
    }
})