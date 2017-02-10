
    /*轮播图*/
     // 4. 声明一个变量，记录定时器
  var t;
  // 1. 求出图片的宽度
  var w = $('.banner img').width();
  // 1. 动态生成按钮
  for(var i = 1,len = $('.banner li').length;i<=len;i++){
    $('.banner .num').append('<span '+(i==1?'class="cur"':'')+'>'+i+'</span> ');
  }

  //1. 记录当前用户看到的是第几张图片
  var cur = 0; //3. 把初始值设置为下标 0

  //1. 数字按钮，鼠标放在哪个按钮上面，就得到那个按钮的下标，把下标给 函数play就可以啦。 
  $('.banner .num span').on('mouseover',function(){
    clearInterval(t); //4. 每一次鼠标放在数字按钮上面，都关闭定时播放功能
    //$(this).addClass('cur').siblings().removeClass('cur'); //2. 高亮当前的按钮，清掉所有兄弟的cur  3. 这里按钮高亮的效果可以放进 play里面的。
    cur = $(this).index(); // 3. 根据数字按钮来改变当前显示的是第几张图，并记录下来
    play(cur);
  });
  
  //4. 鼠标离开数字按钮时，开启自动播放
  $('.banner .num span').on('mouseout',auto);

  //3. 上一张图
  $('.banner .left').on('click',function(){
    if(--cur<0){
      cur = len-1; //3. 如果下标小于0，就改成最后一张
    }
    play( cur ); //3. 当前一张-1就是上一张图片了
  });

  //3. 下一张图
  $('.banner .right').on('click',function(){
    if(++cur>=len){
      cur = 0;
    } //3. 当前一张+1就是下一张图片
       
    play(cur);
  })

  //1. 封装一个函数play，根据参数 cur 来切换 图片
  function play(cur){
    $('.banner .num span').eq(cur).addClass('cur').siblings().removeClass('cur'); // 3. 对应的数字按钮要高亮
    $('.banner ul').stop(true).animate({
      'left': - cur*w,
    },300);
  }
  
  //4. 自动播放，我们不点下一页了s，让定时器 定时点击 下一张
  function auto(){
    clearInterval(t);
    t = setInterval(function(){
      $('.banner .right').trigger('click');
    },3000);
  }
  auto(); //页面一进来的时候就开启自动播放功能。
      /*轮播图*/
     /*选项卡*/
console.log($('.base_right a'));
$('.base_right a').click(function(){
	$('.base_right a').removeClass("base_but");
	$(this).addClass("base_but");
	var a= $(this).index();
	$('.content').find('.box').hide();
	$('.content').find('.box').eq(a).show();

});

$('.base_foot_text a').click(function(){
	$('.base_foot_text a').removeClass("base_color");
	$(this).addClass("base_color");
	if($(this).index()==4){
		$(this).removeClass("base_color");
	}
});
console.log($('.base_foot_text span'));
$('.base_foot_text span').click(function(){
	$('.base_foot_text span').removeClass("base_color");
	$(this).addClass("base_color");
});
       /*选项卡*/