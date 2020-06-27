$(function(){
    $("#header").load("header.html")
    $("#footer").load("footer.html")
    var userid=Number(localStorage.getItem("userObj").split(",")[0].split(":")[1].slice(1,6))
    // 获取购物车中添加的用户商品
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
        id:userid
    },data=>{
        var shopArray = data.data
        console.log(shopArray)
        var str = ""
        for(let i = 0;i<shopArray.length;i++){
            str +=
            `
            <ul class="clearFixed" shop-id="${shopArray[i].pid}">
                <li class="zichbox"><input type="checkbox" name="" id="" class="zich"></li>
                <li><img src="${shopArray[i].pimg}" alt=""></li>
                <li class="carname">${shopArray[i].pname}</li>
                <li class="car-price">${shopArray[i].pprice}</li>
                <li class="car-jisuan">
                    <span class="jian iconfont icon-jianhao1"></span>
                    <input type="text" value="${shopArray[i].pnum}" class="shop-num">
                    <span class="jia iconfont icon-hao"></span>
                </li>
                <li class="danzong">${shopArray[i].pprice*shopArray[i].pnum}</li>
                <li><button class="del-shop" shop-id="${shopArray[i].pid}">删除</button></li>
            </ul>
            `

        }
        $(".car-box").html(str)
        // 添加数量
        $('.jia').click(function(){
            var shopnumber = Number($(this).prev().val())
            shopnumber++
            $(this).prev().val(shopnumber)
            var shopid = $(this).parent().parent().attr("shop-id")
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{uid:userid,pid:shopid,pnum:shopnumber},data=>{
                console.log(data)
                let danzong = $(this).parent().prev().html()*shopnumber
                $(this).parent().next().html(danzong)
            })
            var str1 = 0
            $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{id:userid},data=>{
                let moneyArray = data.data
                for(let i = 0;i < moneyArray.length;i++){
                    str1 += Number(moneyArray[i].pnum*moneyArray[i].pprice)
                }
                $(".zongjia .zong1 .money").html(str1)
            })
        })
        // 减少商品数量
        $(".jian").click(function(){
            var shopnumber = Number($(this).next().val())
            shopnumber--
            if(shopnumber<1){
                shopnumber = 1
            }
            // 减少商品数量  对应求总价 更新购物车数量
            $(this).next().val(shopnumber)
            var shopid = $(this).parent().parent().attr("shop-id")
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{uid:userid,pid:shopid,pnum:shopnumber},data=>{
                console.log(data)
                let danzong = $(this).parent().prev().html()*shopnumber
                $(this).parent().next().html(danzong)
            })
            // 计算所有商品价格
            var str1 = 0
            $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{id:userid},data=>{
                let moneyArray = data.data
                console.log(moneyArray)
                for(let i = 0;i < moneyArray.length;i++){
                    str1 += Number(moneyArray[i].pnum * moneyArray[i].pprice)
                }
                $(".zongjia .zong1 .money").html(str1)
            })
        })
        // 删除购物车中的商品
        $(".del-shop").click(function(){
            var shopid = $(this).attr("shop-id")
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
                uid:userid,
                pid:shopid,
            },data=>{
               $(this).parent().parent().remove()
               $(this).parent().parent().find("li").eq(0).children().prop("checked",false)
               addprice()
            })
        })
        // 计算总价

        function addprice(){
             str1 = 0
             $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{id:userid},data=>{
                 let moneyArray = data.data
                 console.log(moneyArray)
                 // console.log($(".zichbox [checked='true']").length)
                 for(let i = 0;i < $(".zichbox input:checked").length;i++){
                     str1 += Number($(".zichbox input:checked").eq(i).parent().next().next().next().next().children().eq(1).val()*$(".zichbox input:checked").eq(i).parent().next().next().next().html()) 
                    //  str1 += Number(moneyArray[i].pnum*moneyArray[i].pprice)
                 }
                 
                 $(".zongjia .zong1 .money").text(str1)
             })
        }
        // 复选框开始
       let count = $(".zich").length
       if($(".fuch").prop("checked",true)){
           $(".zich").prop("checked","checked")
           count = $(".zich").length
           addprice()
       }
       $(".zich").off().click(function(){
           if($(this).prop("checked")){
               count++
           }else{
               count--
           }
           console.log(count)
           addprice()
           if(count==$(".zich").length){
              $(".fuch").prop("checked",true)
           }else{
              $(".fuch").prop("checked",false)
           }
       })
       $(".fuch").click(function(){
           if($(".fuch").prop("checked")){
              $(".zich").prop("checked","checked")
              count = $(".zich").length
              addprice()
           }else{
              $(".zich").prop("checked",false) 
              count =0;
              str1=0;
              $(".zongjia .zong1 .money").text(str1)
           }
       })
    //回调函数结束 
    })
})