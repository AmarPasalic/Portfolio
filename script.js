document.addEventListener('DOMContentLoaded', function () {
    const mobNav = document.querySelector('.mob_nav');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
      if (mobNav.style.opacity === '0') {
        mobNav.style.opacity = '1';
        mobNav.style.pointerEvents = 'auto';
      } else {
        mobNav.style.opacity = '0';
        mobNav.style.pointerEvents = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    const surroundingCircle = document.querySelector('.surrounding-circle');

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      surroundingCircle.style.left = `${x}px`;
      surroundingCircle.style.top = `${y}px`;
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', function () {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;

      scrollProgress.style.height = `${scrolled}%`;
    });
  });
 
  function changeClient(){
    const client1= document.getElementById("review1");
    const client2 = document.getElementById("review2")
    const client3 = document.getElementById("review3");

    document.getElementById("button1").addEventListener("click", ()=>{
       if(client1.style.opacity!==1){
        client1.style.opacity=1
        client2.style.opacity=0
        client3.style.opacity=0
      }
    })
     
    
    document.getElementById("button2").addEventListener("click", ()=>{
if(client2.style.opacity!==1){
        client2.style.opacity=1
        client1.style.opacity=0
        client3.style.opacity=0
      }
    })
      
    
    document.getElementById("button3").addEventListener("click", ()=>{
 if(client3.style.opacity!==1){
        client3.style.opacity=1
        client1.style.opacity=0
        client2.style.opacity=0
      }
    })
 

  }
  changeClient()