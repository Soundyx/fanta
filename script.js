


var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:'70% 50%',
    scrub:true,
    // markers:true,
}})

tl.to('.fenta',{
    top:"120%",
    left:"1%"
},'orange') // orange is lable to both timelines

tl.to('.orange-cut',{
    top:'160%',
    left:'25%'
},'orange')

tl.to(".orangee",{
   
    top:"165%",
    left:"75%"
}, 'orange')

tl.to(".leaf1",{
   rotate:"120deg",
    top:"105%",
    left:"75%"
}, 'orange')
tl.to(".leaf2",{
   rotate:"120deg",
    top:"105%",
    left:"8%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "10% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})



tl2.to(".fenta",{
    
    left: "32.5%",
    top: "221%",
    width:"33%",
}, 'ca')
tl2.to(".orange-cut",{
    
    left: "41%",
    top: "205%",
    width:"17%",
}, 'ca')


document.querySelectorAll(".line").forEach(function (line){
  var rotate=0;
var diffrot =0;
line.addEventListener("mousemove",function(details){
var diff = (details.clientY-line.getBoundingClientRect().top);
// to rotate we have to find the place where the mouse is mving

 diffrot = details.clientX-rotate;
rotate=details.clientX;
  gsap.to(line.querySelector("img"),{
  opacity:1,
  ease: Power3,
  // for top we have to findthe difference bet clienty and that div
  top:diff,
  left: details.clientX,
  rotate:gsap.utils.clamp(-20,20,diffrot * 0.5),
}); 
});
});

document.querySelectorAll(".line").forEach(function (line){
  var rotate=0;
var diffrot =0;
line.addEventListener("mouseleave",function(details){

  gsap.to(line.querySelector("img"),{
  opacity:0,
  ease: Power3,

  // for top we have to findthe difference bet clienty and that div

}); 
});
});

document.querySelectorAll(".line").forEach(function (line){
  var rotate=0;
var diffrot =0;
line.addEventListener("touchmove",function(details){
var diff = (details.clientY-line.getBoundingClientRect().top);
// to rotate we have to find the place where the mouse is mving

 diffrot = details.clientX-rotate;
rotate=details.clientX;
  gsap.to(line.querySelector("img"),{
  opacity:1,
  ease: Power3,
  // for top we have to findthe difference bet clienty and that div
  top:diff,
  left: details.clientX,
  rotate:gsap.utils.clamp(-20,20,diffrot * 0.5),
}); 
});
});

document.querySelectorAll(".line").forEach(function (line){
  var rotate=0;
var diffrot =0;
line.addEventListener("touchend",function(details){

  gsap.to(line.querySelector("img"),{
  opacity:0,
  ease: Power3,

  // for top we have to findthe difference bet clienty and that div

}); 
});
});

var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".fourth",
    start: "10% 95%",
    end: "20% 50%",
    scrub: true,
    
}})
tl3.to(".orange-cut",{
    
    left: "30%",
    top: "320%",
    width:"6.7%",
}, 'ca')

