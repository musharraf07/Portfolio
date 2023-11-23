(function(){
    emailjs.init("WzWKbNMtWiCHGFp1w");
})();

(function(){
emailjs.init("WzWKbNMtWiCHGFp1w");
})();




  

    var isMobile = window.innerWidth <= 768; 

    if (!isMobile) {
    var typeData = new Typed('.role', {
    strings: [
    'Programmer',
    'Web Developer',
    'Frontend Developer',
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });
    }




  var sun_icon = document.getElementById("sun-icon");
  sun_icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
      sun_icon.src ="images/userAsset/moon.png";
      console.log("light-theme");
    }
    else{
      sun_icon.src ="images/userAsset/sun.png";
      console.log("dark-theme");
    }
  }