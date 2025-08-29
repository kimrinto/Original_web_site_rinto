function all() {
  // $("#back_to_top").on("click", function(){
  //   $("html,body").animate({scrollTop:0}, 500);
  // });

  $("#every_title").on("click", function(){
    $("html,body").animate({scrollTop:0}, 500);
  });

  $(window).on("scroll", function () {
    $(".story").each(function () {
      let target = $(this).offset().top; // 要素の位置
      let scroll = $(window).scrollTop(); // スクロール位置
      let windowHeight = $(window).height(); // 画面の高さ

      if (scroll > target - windowHeight + 300) {

        $(this).addClass("show");

      }
    });
  });


  $(window).on("scroll", function () {
    $(".typewriter").each(function () {
      let $el = $(this);
      let target = $(this).offset().top; // 要素の位置
      let scroll = $(window).scrollTop(); // スクロール位置
      let windowHeight = $(window).height(); // 画面の高さ

    if (scroll > target - windowHeight + 200 && !$el.hasClass("show" )) {
      // 一度だけ実行するため hasClass で確認
        $("header").css("background-image", "url(./assets/img/紺色③.png)");
      setTimeout(function(){
        $("header").css("background-image", "url(./assets/img/赤背景④.png)"); // 元の色に戻す
      }, 2000); // ← 1000ms = 1秒間だけ色を変える


        $("#menu").css("background-image", "url(./assets/img/IMG_5055.png)");
      setTimeout(function(){
        $("#menu").css("background-image", "url(./assets/img/IMG_5046.png)"); // 元の色に戻す
      }, 2000);

        $("#birds").css("opacity", 1);
      setTimeout(function(){
        $("#birds").css("opacity", "");
      }, 2000);


      $el.addClass("show");
      let textContent = $el.text();
      $el.text(""); // 空にする
      for (let i = 0; i < textContent.length; i++) {
        setTimeout(function(){
          $el.append(textContent.charAt(i));
        }, i * 50); // 80msごとに1文字追加
      }
      };
    });
  });

  $(window).on("scroll", function () {
    $(".typewriter2").each(function () {
      let $el2 = $(this);
      let target2 = $(this).offset().top; // 要素の位置
      let scroll2 = $(window).scrollTop(); // スクロール位置
      let windowHeight2 = $(window).height(); // 画面の高さ

    if (scroll2 > target2 - windowHeight2 + 200 && !$el2.hasClass("show" )) {
      // 一度だけ実行するため hasClass で確認

      $el2.addClass("show");
      let textContent2 = $el2.text();
      $el2.text(""); // 空にする
      for (let i = 0; i < textContent2.length; i++) {
        setTimeout(function(){
          $el2.append(textContent2.charAt(i));
        }, i * 50); // 80msごとに1文字追加
      }
      };
    });
  });

  $(function(){
      $(".story").hover(
        function() {
          $(this).css({
            "transform": "translateY(-30px)",
            "background-color": "gray",
          });
        },
        function() {
          $(this).css({
            "transform": "translateY(0)",
            "background-color": "white",
          });
        },
      );
    });

  $(function(){
      $(".story").hover(
        function() {
          $(this).find(".clicker").css("opacity", "1");
        },
        function() {
          $(this).find(".clicker").css("opacity", "0");
        }
      );
  });

  $(function(){
      $("#menu").hover(
        function() {
          $(this).css({
            "background-image": "url(./assets/img/IMG_5055.png)",
          });
        },
        function() {
          $(this).css({
            "background-image": "url(./assets/img/IMG_5046.png)",
          });
        },
      );
    });

  // $(window).on("scroll", function () {
  //   $(".birds").each(function () {
  //     let $el = $(this);
  //     let target = $(this).offset().top; // 要素の位置
  //     let scroll = $(window).scrollTop(); // スクロール位置
  //     let windowHeight = $(window).height(); // 画面の高さ

  //     if (scroll > target - windowHeight + 150 && !$el.hasClass("show" )) {

  //       $(this).addClass("show");
  //       setTimeout(function(){
  //       $el.removeClass("show");
  //     }, 3000);

  //     }
  //   });
  // });



}

all();

$(function(){
  $("#first").on("click", function(){
    $("#overall-1").fadeIn();
  });

    // 閉じる（×ボタンと背景クリック）
  $("#close-1").on("click", function(){
    $("#overall-1").fadeOut();
  });

  $("#second").on("click", function(){
    $("#overall-2").fadeIn();
  });
    // 閉じる（×ボタンと背景クリック）
  $("#close-2").on("click", function(){
    $("#overall-2").fadeOut();
  });

  $("#third").on("click", function(){
    $("#overall-3").fadeIn();
  });
    // 閉じる（×ボタンと背景クリック）
  $("#close-3").on("click", function(){
    $("#overall-3").fadeOut();
  });

  $("#forth").on("click", function(){
    $("#overall-4").fadeIn();
  });
    // 閉じる（×ボタンと背景クリック）
  $("#close-4").on("click", function(){
    $("#overall-4").fadeOut();
  });

  $("#fifth").on("click", function(){
    $("#overall-5").fadeIn();
  });
    // 閉じる（×ボタンと背景クリック）
  $("#close-5").on("click", function(){
    $("#overall-5").fadeOut();
  });
});

$(function(){
  $(".story").on("click", function(){
    $(".modal-content").each(function () {
      let $el3 = $(this);

      $el3.addClass("show");
      let textContent3 = $el3.text();
      $el3.text(""); // 空にする
      for (let i = 0; i < textContent3.length; i++) {
        setTimeout(function(){
          $el3.append(textContent3.charAt(i));
        }, i * 40); // 80msごとに1文字追加
      }
      });
  });
});

$(function () {
  $("#menu").on("click", function () {
    $("#overall-0").fadeIn();
  });

  $("#close-0").on("click", function(){
    $("#overall-0").fadeOut();
  });
});

$(function(){
      $("#close-0").hover(
        function() {
          $(this).css({
            "color": "white",
          });
        },
        function() {
          $(this).css({
            "color": "black",
          });
        },
      );
    });


$(function(){
      $(".index").hover(
        function() {
          $(this).css({
            "color": "white",
          });
        },
        function() {
          $(this).css({
            "color": "black",
          });
        },
      );
    });

$("#index-top").on("click", function(){
    $("html,body").animate({scrollTop:0}, 500);
    $("#overall-0").fadeOut();
  });

$("#index-scene1").on("click", function(){
  let place1 = $("#first").offset().top;
  $("html,body").animate({scrollTop: place1 - 170}, 500);
  $("#overall-0").fadeOut();
});

$("#index-scene2").on("click", function(){
  let place2 = $("#second").offset().top;
  $("html,body").animate({scrollTop: place2 - 170}, 500);
  $("#overall-0").fadeOut();
});

$("#index-scene3").on("click", function(){
  let place3 = $("#third").offset().top;
  $("html,body").animate({scrollTop: place3 - 170}, 500);
  $("#overall-0").fadeOut();
});

$("#index-scene4").on("click", function(){
  let place4 = $("#forth").offset().top;
  $("html,body").animate({scrollTop: place4 - 170}, 500);
  $("#overall-0").fadeOut();
});

$("#index-scene5").on("click", function(){
  let place5 = $("#fifth").offset().top;
  $("html,body").animate({scrollTop: place5 - 170}, 500);
  $("#overall-0").fadeOut();
});

$("#index-warning").on("click", function(){
  let place6 = $("#warning-title").offset().top;
  $("html,body").animate({scrollTop: place6}, 500);
  $("#overall-0").fadeOut();
});





