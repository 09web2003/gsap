var a = document.querySelector ("#cursor");

window.addEventListener("mousemove",function(dets){
    var xvalue=dets.pageX;
    var yvalue=dets.pageY;

    a.style.top=yvalue+"px";
    a.style.left=xvalue+"px";

})

$("#text h3").textillate({
    in:{
        effect:"fadeInUp",
    },
    loop:true,
    out:{
        effect:"fadeOutRight",   
    },
})

gsap.to("#cen",{
    opacity:1,
    y:-100,
    stagger:.2,
    duration:2,
    start:"top 20%",
    scrollTrigger:{
        trigger:"#down",
        toggleAction:"Play Pause resume reverse",
    }
})
$("#text1 h2").textillate({
    in:{
        effect:"fadeInUp",
        delay:15,
    },
    loop:true,
    out:{
        effect:"fadeOutRight",   
    },
})
