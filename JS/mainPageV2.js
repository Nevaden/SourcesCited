var backdrop = document.querySelector(".backdrop");
// var toggleButton = document.querySelector(".toggle-button");
// var sidebar = document.querySelector('.sidebar');
// var toggleLogo = document.querySelector('.sidebar-section-ul__item');
// var navitems = document.querySelector(".nav-items");
// var dd_main = document.querySelector(".dd_main");

  backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    backdrop.classList.remove("open");
  });

  // toggleLogo.addEventListener("click", function() {
  //   // mobileNav.style.display = 'none';
  //   backdrop.classList.add("open");
  //   sidebar.classList.add("open");
  // });

  // function ToggleBackdrop() {
  //   // mobileNav.style.display = 'none';
  //   backdrop.classList.remove("open");
  //   sidebar.classList.remove("open");
  // }



  // function showPasswordCheckbox() {
  //   var x = document.getElementById("password");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  // toggleButton.addEventListener("click", function() {
  //   // mobileNav.style.display = 'block';
  //   // backdrop.style.display = 'block';
  //   backdrop.classList.add("open");
  //   sidebar.classList.add('open');
  // });




  // dd_main.addEventListener("click", function(){
  //     this.classList.toggle("active");
  // })

  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    backdrop.classList.add("open");

  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    backdrop.classList.remove("open");
  }