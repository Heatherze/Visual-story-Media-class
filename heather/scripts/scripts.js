

const speed = 20; // typing speed in milliseconds

// Function to trigger self-typing animation
function triggerTypingAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textElement = entry.target.querySelector('.self-typing');
            const text = textElement.dataset.text;
            typeWriter(text, textElement);
            observer.unobserve(entry.target);
        }
    });
}

// Observer setup
const observer = new IntersectionObserver(triggerTypingAnimation, { threshold: 1 }); // Change threshold value as needed

// Observe all speech bubbles
document.querySelectorAll('.speech-bubble').forEach(bubble => {
    observer.observe(bubble);
});

// Self-typing function
function typeWriter(text, targetElement) {
    let index = 0;
    function type() {
        if (index < text.length) {
            targetElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}


//self-typing 2
const speed_0 = 50; // typing speed in milliseconds

// Function to trigger self-typing animation
function triggerTypingAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textElement = entry.target.querySelector('.self-typing');
            const text = textElement.dataset.text;
            typeWriter(text, textElement);
            observer.unobserve(entry.target);
        }
    });
}

// Observer setup
const observer_0 = new IntersectionObserver(triggerTypingAnimation, { threshold: 1 }); // Change threshold value as needed

// Observe all speech bubbles
document.querySelectorAll('.speech-bubble_1').forEach(bubble => {
    observer.observe(bubble);
});

// Self-typing function
function typeWriter(text, targetElement) {
    let index = 0;
    function type() {
        if (index < text.length) {
            targetElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}



//self-typing 3

//self-typing 2
const speed_1 = 50; // typing speed in milliseconds

// Function to trigger self-typing animation
function triggerTypingAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textElement = entry.target.querySelector('.self-typing');
            const text = textElement.dataset.text;
            typeWriter(text, textElement);
            observer.unobserve(entry.target);
        }
    });
}

// Observer setup
const observer_1 = new IntersectionObserver(triggerTypingAnimation, { threshold: 1 }); // Change threshold value as needed

// Observe all speech bubbles
document.querySelectorAll('.speech-bubble_2').forEach(bubble => {
    observer.observe(bubble);
});

// Self-typing function
function typeWriter(text, targetElement) {
    let index = 0;
    function type() {
        if (index < text.length) {
            targetElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}
//scroll telling 

document.addEventListener('DOMContentLoaded', function() {
  var main = document.querySelector("main");
  var scrolly = main.querySelector("#scrolly");
  var sticky = scrolly.querySelector(".sticky-thing");
  var article = scrolly.querySelector("article");
  var steps = article.querySelectorAll(".step");

  // Define image paths
  var imagePaths = [
    "images/basic assesment1.png",
    "images/Discussion.png",
    "images/decision.png"
  ];

  // Initialize index for imagePaths
  var imageIndex = 0;

  // Function to update background image
  function updateBackgroundImage() {
    sticky.classList.remove('show'); // Remove 'show' class to reset opacity
    
    // Set new background image
    sticky.style.backgroundImage = 'url("' + imagePaths[imageIndex] + '")';
    
    // Reapply 'show' class to trigger fade-in effect
    setTimeout(function() {
      sticky.classList.add('show');
    }, 1); // Delay to ensure smooth transition
  }

  // Initialize the scrollama
  var scroller = scrollama();

  // Scrollama event handlers
  function handleStepEnter(response) {
    var el = response.element;
  
    // Remove 'active' class from all steps
    steps.forEach(function(step) {
      step.classList.remove('active');
    });
  
    // Add 'active' class to the currently active step
    el.classList.add('active');
  
    // Update background image based on step index
    imageIndex = Array.from(steps).indexOf(el);
    updateBackgroundImage();
  }


  function init() {
    // Update background image initially
    updateBackgroundImage();

    scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.33,
        debug: true
      })
      .onStepEnter(handleStepEnter);

    // Setup resize event
    window.addEventListener("resize", scroller.resize);
  }

  // Kick things off
  init();
});




      
//GAME

// UHM 
document.addEventListener('DOMContentLoaded', function() {
  // Attempt to get the element by class name
 const circle0 = document.querySelector('.rectangle_U.rectangle_U1');

  const rectangle0 = document.querySelector('.rectangle.rectangle_0');
  const rectangle1 = document.querySelector('.rectangle.rectangle_1');
  const rectangle7 = document.querySelector('.rectangle.rectangle_7');
  const rectangle8 = document.querySelector('.rectangle.rectangle_8');

 circle0.addEventListener('mouseenter', function() {
  rectangle0.classList.add('highlight');
  rectangle1.classList.add('highlight');
  rectangle7.classList.add('highlight');
  rectangle8.classList.add('highlight');


});

// Add mouseleave event listener to circle_0
circle0.addEventListener('mouseleave', function() {
  rectangle0.classList.remove('highlight');
  rectangle1.classList.remove('highlight');
  rectangle7.classList.remove('highlight');
  rectangle8.classList.remove('highlight');

});
}); 

//UIUC 
document.addEventListener('DOMContentLoaded', function() {
  // Attempt to get the element by class name
 const circle1 = document.querySelector('.rectangle_U.rectangle_U2');

  const rectangle0 = document.querySelector('.rectangle.rectangle_0');
  const rectangle2 = document.querySelector('.rectangle.rectangle_2');
  const rectangle3 = document.querySelector('.rectangle.rectangle_3');

  const rectangle1 = document.querySelector('.rectangle.rectangle_1');
  const rectangle7 = document.querySelector('.rectangle.rectangle_7');
  const rectangle8 = document.querySelector('.rectangle.rectangle_8');

 circle1.addEventListener('mouseenter', function() {
  rectangle0.classList.add('highlight');
  rectangle1.classList.add('highlight');
  rectangle7.classList.add('highlight');
  rectangle8.classList.add('highlight');
  rectangle2.classList.add('highlight');
  rectangle3.classList.add('highlight');


});

// Add mouseleave event listener to circle_0
circle1.addEventListener('mouseleave', function() {
  rectangle0.classList.remove('highlight');
  rectangle1.classList.remove('highlight');
  rectangle7.classList.remove('highlight');
  rectangle8.classList.remove('highlight');
  rectangle2.classList.remove('highlight');
  rectangle3.classList.remove('highlight');

});
}); 
//SL 

document.addEventListener('DOMContentLoaded', function() {
  // Attempt to get the element by class name
 const circle2_1 = document.querySelector('.rectangle_U.rectangle_U4');

  const rectangle0 = document.querySelector('.rectangle.rectangle_0');
  const rectangle2 = document.querySelector('.rectangle.rectangle_2');
  const rectangle3 = document.querySelector('.rectangle.rectangle_3');
  const rectangle5 = document.querySelector('.rectangle.rectangle_5');
  const rectangle6 = document.querySelector('.rectangle.rectangle_6');
  const rectangle1 = document.querySelector('.rectangle.rectangle_1');
  const rectangle7 = document.querySelector('.rectangle.rectangle_7');
  const rectangle8 = document.querySelector('.rectangle.rectangle_8');

 circle2_1.addEventListener('mouseenter', function() {
  rectangle0.classList.add('highlight');
  rectangle1.classList.add('highlight');
  rectangle7.classList.add('highlight');
  rectangle8.classList.add('highlight');
  rectangle2.classList.add('highlight');
  rectangle3.classList.add('highlight');
  rectangle5.classList.add('highlight');
  rectangle6.classList.add('highlight');


});

// Add mouseleave event listener to circle_0
circle2_1.addEventListener('mouseleave', function() {
  rectangle0.classList.remove('highlight');
  rectangle1.classList.remove('highlight');
  rectangle7.classList.remove('highlight');
  rectangle8.classList.remove('highlight');
  rectangle2.classList.remove('highlight');
  rectangle3.classList.remove('highlight');
  rectangle5.classList.remove('highlight');
  rectangle6.classList.remove('highlight');

});
}); 

//UMA 

document.addEventListener('DOMContentLoaded', function() {
  // Attempt to get the element by class name
 const circle2 = document.querySelector('.rectangle_U.rectangle_U3');

  const rectangle0 = document.querySelector('.rectangle.rectangle_0');
  const rectangle2 = document.querySelector('.rectangle.rectangle_2');
  const rectangle1 = document.querySelector('.rectangle.rectangle_1');
  const rectangle7 = document.querySelector('.rectangle.rectangle_7');
  const rectangle8 = document.querySelector('.rectangle.rectangle_8');

 circle2.addEventListener('mouseenter', function() {
  rectangle0.classList.add('highlight');
  rectangle1.classList.add('highlight');
  rectangle7.classList.add('highlight');
  rectangle8.classList.add('highlight');
  rectangle2.classList.add('highlight');


});

// Add mouseleave event listener to circle_0
circle2.addEventListener('mouseleave', function() {
  rectangle0.classList.remove('highlight');
  rectangle1.classList.remove('highlight');
  rectangle7.classList.remove('highlight');
  rectangle8.classList.remove('highlight');
  rectangle2.classList.remove('highlight');

});
}); 


//fade in 
document.addEventListener('DOMContentLoaded', function() {
  var text = document.querySelector(".ending_K");

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle the intersection observer callback
  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text.classList.add('show'); // Add 'show' class to trigger fade-in effect
      }
    });
  }

  // Create an intersection observer instance
  var observer = new IntersectionObserver(handleIntersection);

  // Observe the text element
  observer.observe(text);
});
