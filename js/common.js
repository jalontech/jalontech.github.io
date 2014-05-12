(function($){
    $(document).ready(function(){

        //首页相关
        var defaultIndex = 0;
        $('#nav').find('li').each(function(index,item){
        	
            var a = $(item).find('a'),
                defA = $(item).find('a.current'),
            	currentBg = $('#current-bg'),
            	step = 97;
            if (a.hasClass('current')){
                defaultIndex = index
                currentBg.css({
                    'left':step * defaultIndex
                });
            }
            a.hover(
                function(){
                    $('#nav li a').removeClass('current');
                    $(this).addClass('current');
                    var left = step * index;
                    currentBg.stop().animate({
                        'left':left
                    });
                },
                function(){
                    $(this).removeClass('current');
                    $('#defCurrent').addClass('current');
                    var left = step * defaultIndex
                    currentBg.stop().animate({
                        'left':left
                    });
                }
            );
        });
        
        //内页相关
        $('#sidebar').find('li').each(function(index,item){
            var a = $(item).find('a');
            var defaultIndex = 0;
            if (a.hasClass('current-item')){
                defaultIndex = index
            }
            a.hover(
                function(){
                    $('#sidebar li a').removeClass('current-item');
                    $(this).addClass('current-item');
                },
                function(){
                    $(this).removeClass('current-item');
                    $('#currentItem').addClass('current-item');
                }
            );
        });

        //labels
        $('table.styled-table').each(function(){
            $(this).find('tr:even').css({
                'background':'#eef4f6'
            });
        });

        //通用方法
        $.fn.extend({
            placeholder:function(){
                function hasPlaceholder(){
                    var input = document.createElement('input');
                    return ('placeholder' in input);
                }
                if (!hasPlaceholder()){
                    $(this).each(function(){
                        var self = $(this);
                        var p = self.attr('placeholder');
                        self.val(p).css('color', '#ccc');
                        self.focus(function(){
                            self.css({'color':'#333'});
                            if ($(this).val() == p){
                                $(this).val('');
                            }
                        });
                        self.blur(function(){
                            if ($.trim($(this).val()) == ''){
                                $(this).val(p);
                                self.css({'color':'#ccc'});
                            }else{
                                self.css({'color':'#333'});
                            }
                        });
                    });
                   
                }
            }
        });

        //placeholder
        $('input[placeholder],textarea[placeholder]').placeholder();
    });
})(jQuery)

