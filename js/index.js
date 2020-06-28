$(function(){
  $('#header').load('header.html')
  $('#mfoot').load('footer.html')
  // $(".yinying").click(function(){
  //   $(this).css({"pointer-events":"none"})
  // })
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
      uid: 34256
  }, data => {
      console.log(data.data);
      var shopArray = data.data
      var str = ""
      for(let i = 0;i<shopArray.length;i++){
        str +=
        `
        <div class="swiper-slide">
        <a href="detail.html?id=${shopArray[i].pid}">
          <li>
            <img src="${shopArray[i].pimg}">
            <p class="product-name">${shopArray[i].pname}</p>
            <p class="product-desc">${shopArray[i].pdesc}</p>
            <div class="line"></div>
            <p class="product-price">￥${shopArray[i].pprice}</p>
          </li>
          </a>
        </div>
        
        `
      }
      
      $(".swiper-wrapper").html(str)
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween:10,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.xia',
          prevEl: '.shang',
        },
      });

  })


  })