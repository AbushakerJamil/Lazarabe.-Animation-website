function navUpDownAnimation(){
    let nav = document.querySelector('nav');

nav.addEventListener('mouseenter',()=>{
    let tl = gsap.timeline();

    tl.to('.nav-bottom',{
        duration:0.3,
        height:'21vh'
    })
    tl.to('.nav-part2 h5',{
        display:'block'

    })
    tl.to('.nav-part2 h5 span',{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})

nav.addEventListener('mouseleave',()=>{
    let tl = gsap.timeline();
    tl.to('.nav-part2 h5 span',{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to('.nav-part2 h5',{
        display:'none',
        duration:0.1
    })
    tl.to('.nav-bottom',{
        height:0,
        duration:0.1
    })
})

}
navUpDownAnimation();