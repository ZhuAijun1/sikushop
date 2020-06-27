$(function(){
    $('#header').load("header.html")
    $('#footer').load("footer.html")
    // var userid=Number(localStorage.getItem("userObj").split(",")[0].split(":")[1].slice(1,6))
    // 开始在地址栏获取ID引数据
    var id = location.search.split("=")[1];
    console.log(id)
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
      uid: 34256
  }, data => {
    //   console.log(data.data);
      var array = data.data
      for(let i = 0;i<array.length;i++){
          if(array[i].pid == id){
            //   console.log(array[i])
              var str = 
              `
            <div class="detailM">
                <p class="detail-name fl">${array[i].pname}</p>
                <p class="shopnum fr">商品编码：<span>${array[i].pid}</span></p>
            </div>
        <!-- 放大镜开始 -->
        <div class="shop-detail clearFixed">
            <div class="shop-img fl">
                <img src="${array[i].pimg}" alt="">
                <p class="yikuai"></p>
            </div>
            <div class="shop-name fl">
                <li class="shopnameA">
                ${array[i].pname}
                </li>
                <li class="shoppriceA">
                   <p> 一口价￥<span>${array[i].pprice}</span></p>
                   <p>有货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预计下单后会在2-4天内发货</p>
                   <p>商品信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自营</p>
                </li>
                <li class="buyadd clearFixed">
                    <p class="fl" style="margin-right: 20px;">购买数量</p>
                    <p class="jiajian fl">
                        <span id="jian" class="iconfont icon-jianhao1"></span>
                        <input type="text" name="" id="" value="1" class="shop-number">
                        <span id="jia" class="iconfont icon-hao"></span>
                    </p>
                </li>
                <!-- 放大镜开始 -->
                <div class="fangdajing">
                    <img src="${array[i].pimg}" alt="">
                </div>
                <!-- 放大镜结束 -->
                <p class="addcar">添加购物车</p>
            </div>
        </div>

              `
              $("#content").html(str)


            // 静态页面效果  
            $('#content .shop-detail .shop-img').mouseenter(function(e){
                $('#content .shop-detail .shop-img .yikuai').css({display:'block'})
                $('.shop-detail .shop-name .fangdajing').css({display:'block'})
            }).mousemove(function(e){
                let l = e.pageX-$('#content .shop-detail .shop-img').offset().left-100
                let t = e.pageY-$('#content .shop-detail .shop-img').offset().top-100
                if(t<0){
                    t = 0
                }else if(t>200){
                    t=200
                }
                if(l<0){
                    l = 0
                }else if(l>200){
                    l=200
                }
                $("#content .shop-detail .shop-img .yikuai").css({
                    left: l,
                    top: t,
                });
                //大图片，按照对应倍数的反方向移动
                $(".shop-detail .shop-name .fangdajing img").css({
                    left: -2 * l,
                    top: -2 * t
                })
                $('#content .shop-detail .shop-img').mouseleave(function(){
                    $('#content .shop-detail .shop-img .yikuai').css({display:'none'})
                $('.shop-detail .shop-name .fangdajing').css({display:'none'})
                })
            })
            $('#jian').click(function(){
                var i  = Number($('.shop-number').val())
                i--
                if(i<1){
                    $('.shop-number').val(1)
                }else{ 
                    $('.shop-number').val(i)
                }
                
            })
            $('#jia').click(function(){
                var i  = Number($('.shop-number').val())
                i++
                
                $('.shop-number').val(i)
            })
            // 购物车按钮事件
            $(".addcar").click(function(){
                if(localStorage.getItem("userObj") == null){
                    location.replace("login.html")
                }else{
                var userid = Number(localStorage.getItem("userObj").split(",")[0].split(":")[1].slice(1,6))
                var shopnum = $(".shop-number").val()
                console.log(userid)
                $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{uid:userid,pid:id,pnum:shopnum},data=>{
                    console.log(data)
                })
                location.replace("car.html")
                }
            })
            // if判断
          }
        //   for循环

        }
    //   回调函数
      }

    //   添加购物车请求结束
    )
})