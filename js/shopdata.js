$(function(){
    $("#header").load('header.html')
    $('#footer').load('footer.html')
    // 添加商品信息
    // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{pimg:"../shopimg/baixie.jpg",pname:'Lanvin/浪凡',pprice:3150,pdesc:'Lanvin/浪凡 【FW19】19秋冬 女士休闲运动鞋 FW-SKDLON-NASU-H19【官方授权】',uid:34256},(data)=>{
    //     console.log(data)
    // })
    // 获取商品信息
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 34256
    }, data => {
        var array = data.data
        console.log(array)
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
        console.log(data);
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