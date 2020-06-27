$(function(){
    $("#header").load('header.html')
    $('#footer').load('footer.html')
    // 添加商品信息
    // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{pimg:"../shopimg/baixie.jpg",pname:'Lanvin/浪凡',pprice:3150,pdesc:'Lanvin/浪凡 【FW19】19秋冬 女士休闲运动鞋 FW-SKDLON-NASU-H19【官方授权】',uid:34256},(data)=>{
    //     console.log(data)
    // })
    // 获取商品信息
    function showlist(x){
        $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
            pagesize:12,
            pagenum:x,
            uid: 34256,
        }, data => {
            var array = data.data
            var str = ''
            for(let i = 0;i< array.length;i++){
                str +=
                `<a href="detail.html?id=${array[i].pid}">
                <li>
                    <img src="${array[i].pimg}" alt="">
                    <div class="jingying"><span>自营</span><span>直降</span></div>
                    <div class="name-shop">${array[i].pdesc}</div>
                    <div class="pprice">￥${array[i].pprice}</div>
                </li>
                </a>
                `
            }
            $(".xiezi").html(str)
            // console.log(data);
        })
    }
    showlist(0)
    $(".first").click(function(){
        $(this).css({background:" #e93b39",color:" #fff"}).siblings().css({background:"white",color:"black"})
        var pagenum = Number($(this).html()) - 1
        showlist(pagenum)
    })
    $(".second").click(function(){
        $(this).css({background:" #e93b39",color:" #fff"}).siblings().css({background:"white",color:"black"})
        var pagenum = Number($(this).html()) - 1
        console.log(pagenum)
        showlist(pagenum)
    })
    var pageNum = 0
    $(".shopdata .remai .yema .next").click(function(){
        $(this).css({background:" #e93b39",color:" #fff"}).siblings().css({background:"white",color:"black"})
        pageNum++
        if(pageNum>1){
            pageNum = 1
        }
        showlist(pageNum)
    })
    $(".shopdata .remai .yema .prev").click(function(){
        $(this).css({background:" #e93b39",color:" #fff"}).siblings().css({background:"white",color:"black"})
        pageNum--
        if(pageNum<0){
            pageNum = 0
        }
        showlist(pageNum)
    })
    $(".shopdata .remai .gediao li").click(function(){
        $(this).css({background:" #e93b39",color:" #fff"}).siblings().css({background:"white",color:"black"})
    })
    // 删除商品
    // $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php",{
    //     pid:202468,
    //     uid:34256,
    //     token:"971185627e571c926c6c1bb4bf6439b0"
    // },data=>{
    //     console.log(data)
    // })
})