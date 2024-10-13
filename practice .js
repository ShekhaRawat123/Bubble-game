// document.querySelector('#center')
// .addEventListener("mousemove", function(details){
//     console.log(details.clientX, details.clientx);
//  })

        // Step 1: Create the throttle function
        function throttle(func, delay) {
            let lastCall = 0;

            return function(...args) {
                const now = new Date().getTime();
                if (now - lastCall >= delay) {
                    lastCall = now;
                    func.apply(this, args);
                }
            };
        }

    
      document.querySelector('#center').addEventListener("mousemove",throttle((dets)=>{  div=document.createElement("div");
div.classList.add('imagediv');
div.style.left = dets.clientX + "px";
div.style.top = dets.clientY + "px"
div.style.height = 130 + "px"
div.style.width = 100 + "px"
var img = document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1727799777485-4939c90326ad?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
div.appendChild(img);

document.body.appendChild(div);

   // Initial y position for the img
   gsap.set(img, {
    y: "100%",
    ease: Power1.easeOut,
    duration: 2
     // starting position for animation
});

// // Animate the img element using gsap
gsap.to(img, {
    y: "0%",  // moving it to its original position
    ease: Power1.easeOut, // easing function (corrected)
   delay :0.1,
   duratiom: 0.5 // duration of the animation in seconds
});
setTimeout(function(){
    div.remove();
}, 1000)
      },500));

