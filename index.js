$(document).ready(function(){
    var screen_width= $('html').width();
    var screen_height= window.innerHeight;
    var width_value= screen_width/1920;
    var height_value= screen_height/1080;
    var screen_value= width_value * height_value;
    let counter=0;
    $(".r-s-next").click(function(){
        counter++;
        var current = $(`#rhino-species-${counter}`);
        var next = $(`#rhino-species-${counter+1}`);
        var tnext = $(`#rhino-species-${counter+2}`);
        let y = 598.192*width_value, z= 501;
        let tmvcurrent = `matrix(0.9, 0, 0, 0.9, -${y*(counter-1)}, 0)`;
        let tmvprev = `matrix(1, 0, 0, 1, -${y*counter}, 0)`;
        let tmvnext = `matrix(1, 0, 0, 1,-${y*counter}, 0)`; 
        current.css({
            transform: tmvcurrent, opacity: 0
        });
        next.css({
            transform: tmvprev, opacity: 1
        });
        tnext.css({
            transform: tmvnext, opacity: 1
        });
        if(counter==4){
            $("#.r-s-next").attr('disabled',true);
        }
        if(counter==0){
            $(".r-s-prev").attr('disabled',true);
        }
        else{
            $(".r-s-prev").attr('disabled',false);
        }
    });
    $(".r-s-prev").click(function(){
        counter--;
        console.log(counter);
        var prev = $(`#rhino-species-${counter+1}`);
        var current = $(`#rhino-species-${counter+2}`);
        var next = $(`#rhino-species-${counter+3}`);
        let y = 598.192*width_value, z= 501;
        let tmvprev = `matrix(1, 0, 0, 1, -${y*(counter)}, 0)`;
        let tmvcurrent = `matrix(1, 0, 0, 1, -${y*(counter)}, 0)`;
        let tmvnext = `matrix(1, 0, 0, 1,-${y*(counter)}, 0)`; 
        prev.css({
            transform: tmvprev, opacity: 1
        });
        current.css({
            transform: tmvcurrent, opacity: 1
        });
        next.css({
            transform: tmvnext, opacity: 1
        });
        if(counter==0){
            $(".r-s-prev").attr('disabled',true);
        }
        if(counter!=4){
            $(".r-s-next").attr('disabled',false);
        }
    });
    let x=66.31*width_value;
    let y=-100.787*height_value;
    let statcol1 = `matrix(1,0,0,1,${x},${y})`;
    let stc1 = $('#stat-column-1');
    stc1.css({
        transform: statcol1
    });
    let i=537.070*width_value;
    let j=-403.14*height_value;
    let statcol2 = `matrix(1,0,0,1,${i},${j})`;
    let stc2 = $('#stat-column-2');
    stc2.css({
        transform: statcol2
    });
    let m=100.157*width_value;
    let n=-705.511*height_value;
    let statcol3 = `matrix(1,0,0,1,${m},${n})`;
    let stc3 = $('#stat-column-3');
    stc3.css({
        transform: statcol3
    });
    window.onscroll= function(){
        let scrollValue = window.scrollY;
        let transformValue = 689.5*screen_value;
        let transformmax= transformValue+625;
        if( scrollValue >= transformValue && scrollValue < transformmax) {
            let x=(66.31+(scrollValue-transformValue)*0.3518)*width_value;
            let y=(-100.787+(scrollValue-transformValue)*0.967)*height_value;
            let i=(537.070-(scrollValue-transformValue)*0.404)*width_value;
            let j=(-403.14+(scrollValue-transformValue)*1.128)*height_value;
            let m=(100.157+(scrollValue-transformValue)*0.275)*width_value;
            let n=(-705.511+(scrollValue-transformValue)*1.290)*height_value;
            let statcol1 = `matrix(1,0,0,1,${x},${y})`;
            let stc1 = $('#stat-column-1');
            stc1.css({
                transform: statcol1
            });
            let statcol2 = `matrix(1,0,0,1,${i},${j})`;
            let stc2 = $('#stat-column-2');
            stc2.css({
                transform: statcol2
            });
            let statcol3 = `matrix(1,0,0,1,${m},${n})`;
            let stc3 = $('#stat-column-3');
            stc3.css({
                transform: statcol3
            });
            let opac= (0+(scrollValue-transformValue)*0.0016);
            $('.stat-column .desc').css({
                opacity:opac
            });
            // let z= (0 + (scrollValue-transformValue)*0.88)*width_value;
            // let titletransform=`matrix(1,0,0,1,0,${z})`;
            // $('.dyk-section .title').css({
            //     transform: titletransform
            // });

        }
    }



  });