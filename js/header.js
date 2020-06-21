$('.daohang li').hover(function(){
    var _index = $(this).index()
    $('.xiala li').eq(_index).css({
        display:'block'
    })
},function(){
    var _index = $(this).index()
    $('.xiala li').eq(_index).css({
        display:'none'
    })
})
$('#header .choose .language .ce').click(function(){
$('#header .choose .language .xuanze').slideToggle();
})
$('.nav .search').click(function(){
    $('.nav .search p').css({color:'white'})
    $('.nav .search input').animate({width:'160px'})
    // console.log('1')
})
$('.nav .search input').blur(function(){
    $(this).animate({width:'0px'})
    $('.nav .search p').css({color:'#ffb81c'})
})