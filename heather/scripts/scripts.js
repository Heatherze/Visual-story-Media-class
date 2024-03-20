


const text = "Hi, I am Becky! I am a high school senior from Lowell, Massachusetts. I think I am a good student (at least that is what my teachers say). I have averaged As and Bs in all my courses and scored a 1310 on the SAT. I am from a dual-income household. My parents make around $85,000 a year, and my younger sister also plans to attend college. My favorite activity is playing soccer, but I am also on the school debate club! In college, I’d love to study psychology or sociology.";
let index = 0;
const speed = 50; // typing speed in milliseconds

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text-container").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

document.addEventListener("DOMContentLoaded", function() {
    const humanIcon = document.getElementById("human-icon");
    
    // Function to start the animation when the SVG is in view
    function startAnimation() {
      humanIcon.style.animationPlayState = "running";
    }
  
    // Function to check if the SVG is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to handle scroll event
    function handleScroll() {
      if (isElementInViewport(humanIcon)) {
        startAnimation();
        // Remove the scroll event listener once the animation starts
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
  });



//scrollytelling 
      document.addEventListener('DOMContentLoaded', function() {
        // Your JavaScript code here
        var main = document.querySelector("main");
        var scrolly = main.querySelector("#scrolly");
        var sticky = scrolly.querySelector(".sticky-thing");
        var article = scrolly.querySelector("article");
        var steps = article.querySelectorAll(".step");
      
        // initialize the scrollama
        var scroller = scrollama();
      
        // scrollama event handlers
        function handleStepEnter(response) {
          var el = response.element;
      
          // remove is-active from all steps
          // then add is-active to this step
          steps.forEach(step => step.classList.remove('is-active'));
          el.classList.add('is-active');
      
          // update graphic based on step
          sticky.querySelector("p").innerText = el.dataset.step;
        }
      
        function init() {
          scroller
            .setup({
              step: "#scrolly article .step",
              offset: 0.33,
              debug: true
            })
            .onStepEnter(handleStepEnter);
      
          // setup resize event
          window.addEventListener("resize", scroller.resize);
        }
      
        // kick things off
        init();
      });
      
      