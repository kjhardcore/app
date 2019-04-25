$(function(){
    setInterval(function(){
        get_time()
        digit()
        analog()
    },1000)//interval
    
    function get_time(){
        time = new Date()
        year = time.getFullYear()
        month = time.getMonth() + 1//0부터시작
        date = time.getDate()
        hour = time.getHours()
        minute = time.getMinutes()
        seconds = time.getSeconds() 
    }//get_time
    function digit(){
        $(".year").text(year+".")
        if(month<10){
            $(".month").text("0"+month+".")
        }else{
            $(".month").text(month+".")
        }//if else
        
        if(date<10){
            $(".date").text("0"+date)
        }else{
            $(".date").text(date)
        }//if else
        
        if(hour<10){
            $(".hour").text("0"+hour)
        }else{
            $(".hour").text(hour)
        }//if else
        
        if(minute<10){
            $(".minute").text("0"+minute)
        }else{
            $(".minute").text(minute)
        }//if else           
    }//digit
    function analog(){
        deg_h = hour * 30 + minute * 0.5
        deg_m = minute * 6
        deg_s = seconds * 6
        $(".pin_hour").css("transform","rotate("+deg_h+"deg)")
        $(".pin_min").css("transform","rotate("+deg_m+"deg)")
        $(".pin_sec").css("transform","rotate("+deg_s+"deg)")
    }//analog
    //-----------------------------------//
    //event
    //-----------------------------------//
    $(".coatch_mark").click(function(){
       $(this).fadeOut()
    })//click
    $(".tab button").click(function(){
        $(".view1,.view2").stop().fadeOut()
        $($(this).attr("data-view")).stop().fadeIn()
    })//click
    //-----------------------------------//
    //resize view2
    //-----------------------------------//
    set_scale()
    function set_scale(){
        winh = $(window).height()
        ratio = winh / 380
        $(".view2").css("transform","translate(-50%,-50%) scale("+ratio+")")
    }//scale
    $(window).resize(function(){
       set_scale() 
    })//resize
})//ready




