// 메뉴 클릭 시, 해당 섹션으로 이동
$(document).ready(function() {
    $(".menu").click(function(e){            
        e.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
    });
});

// 메인에 마우스를 올렸을 때, 배경화면 움직임
$(document).ready(function() {
    var currentX = '';
    var currentY = '';
    var movementConstant = 0.01;
    
    $('section#main').mousemove(function(e) {
        var xdiff = e.pageX - currentX;
        var ydiff = e.pageY - currentY;
        
        currentX = e.pageX;
        currentY = e.pageY;
      
        if (currentX == '') currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;

      $('.main_bg div').each(function(i, el) {
          var movement = (i + 1) * (xdiff * movementConstant);
          var movementy = (i + 1) * (ydiff * movementConstant);
          
          var newX = $(el).position().left + movement;
          var newY = $(el).position().top + movementy;
          
          $(el).css('left', newX + 'px');
          $(el).css('top', newY + 'px');
      }, 'slow');
    });
});

// screenshot 
$(document).ready(function() {
    $('div.image-slide ul.indicator li a').on('click', function(e) {
        e.preventDefault();
        var index = $('div.image-slide ul.indicator li').index($(this).parent());
        $('div.image-slide ul.slide li').css({'display': 'none'});
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display': 'block'});
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');
    });
    
    $('div.image-slide p.control a.prev').on('click', function(e) {
        e.preventDefault();
        var index = $('div.image-slide ul.indicator li').index($('div.image-slide ul.indicator li.on'));
        index = (index <= 0) ? 4 : index - 1;
        $('div.image-slide ul.slide li').css({'display': 'none'});
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display': 'block'});
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');
    });
    
    $('div.image-slide p.control a.next').on('click', function(e) {
        e.preventDefault();
        var index = $('div.image-slide ul.indicator li').index($('div.image-slide ul.indicator li.on'));
        index = (index >= 4) ? 0 : index + 1;
        $('div.image-slide ul.slide li').css({'display': 'none'});
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display': 'block'});
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');
    });
});

// list rolling
$(document).ready(function(){
	var height =  $(".rolling").height();
	var num = $(".rolling_list li").length;
	var max = height * num;
	var move = 0;
	function noticeRolling(){
		move += height;
		$(".rolling_list").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,2500);
	$(".rolling_list").append($(".rolling_list li").first().clone());
});		