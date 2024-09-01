
function page1animation(){
    var tl=gsap.timeline();
tl.from("nav h1,nav h4, nav button",{
    Y:-30,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})


tl.from(".center-part1 h1",{
    x:-300,
    duration:0.4,
    opacity:0
},"-=0.3")

tl.from(".center-part1 p",{
    x:-200,
    duration:0.3,
    opacity:0
})

tl.from(".center-part1 button",{
    duration:0.3,
    opacity:0
})

tl.from(".center-part2 img",{
    duration:0.5,
    opacity:0
},"-=1")


}
page1animation()

// wheel animation
function wheelanimation (){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to(".marque",{
                transform:'translateX(-200%)',
                duration:5,
                repeat:-1,
                ease:'none'
            })
        }else{
            gsap.to(".marque",{
                transform:'translateX(0)',
                duration:5,
                repeat:-1,
                ease:'none'
            })
        }
    })
}
wheelanimation();

// page2animation
function page2animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section-2",
            scroller:"body",
            start:"top 50%",
            end:"top 0%",
            scrub:2
    
        }
    })
    tl2.from(".Anime ",{
        y:30,
        opacity:0,
        duration:0.6
    })
    
    tl2.from(".elem.line-1.left",{
        x:-300,
        duration:1,
        opacity:0,
    },"line1")
    
    tl2.from(".elem.line-1.right",{
        x:300,
        duration:1,
        opacity:0,
    },"line1")
    
    tl2.from(".elem.line-2.left",{
        x:-300,
        duration:2,
        opacity:0,
    },"line2")
    
    tl2.from(".elem.line-2.right",{
        x:300,
        duration:2,
        opacity:0,
    },"line2")
    
    
}
page2animation();