'use strict'

const smoothScroll = () => {
    let btnForScroll = document.querySelector('main > a:last-child')
    let servicesSection = document.getElementById('service-block')

    const animateScroll = () => {
        function animate(options) {

            var start = performance.now();
          
            requestAnimationFrame(function animate(time) {
              // timeFraction от 0 до 1
              var timeFraction = (time - start) / options.duration;
              if (timeFraction > 1) timeFraction = 1;
          
              // текущее состояние анимации
              var progress = options.timing(timeFraction)
              
              options.draw(progress);
          
              if (timeFraction < 1) {
                requestAnimationFrame(animate);
              }
          
            });
          }
          
              console.log(btnForScroll)
          
                  function makeEaseOut(timing) {
                      return function(timeFraction) {
                        return 1 - timing(1 - timeFraction);
                      }
                    }
                
                    function bounce(timeFraction) {
                      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
                        if (timeFraction >= (7 - 4 * a) / 11) {
                          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                        }
                      }
                    }
                
                    function startAnimation() {
                
                      animate({
                        duration: 2000,
                        timing: makeEaseOut(bounce),
                        draw() {
                  servicesSection.scrollIntoView(top);
                        }
                      });
                
                  } startAnimation()
              
    }

   
        
 /*const duration = 800;

    const top = servicesSection.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = top;

    console.log(top)

    let startTime = null;
    let requestId;

    const loop = function (currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }

        console.log(currentTime)
        console.log(startTime)
        
  

        const time = currentTime - startTime;
        console.log(time)
        const percent = Math.min(time / duration, 1);
        servicesSection.scrollIntoView(top, startPos + diff * percent);

        if (time < duration) {
            requestId = window.requestAnimationFrame(loop);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    }
    requestId = window.requestAnimationFrame(loop);

        }*/

    

      
        btnForScroll.addEventListener('click', animateScroll)

}

export default smoothScroll