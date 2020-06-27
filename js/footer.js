$(function(){
    $('#nfooter .ncontainer .our-app .firstone .sikuyishu li').hover(function(){
        var index = $(this).index()
        $("#nfooter .ncontainer .our-app .app-img li").eq(index).css({display:'block'})
    },function(){
        var index = $(this).index()
        $("#nfooter .ncontainer .our-app .app-img li").eq(index).css({display:'none'})
    })
})