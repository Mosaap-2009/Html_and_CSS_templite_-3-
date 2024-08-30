//Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");


if (mainColors !== null) {

  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

      //Remove Active Class From All Colors List Item
        document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");
  

          //-----------------------------------------
          if (element.dataset.color === mainColors)

          //Add Active Class
          element.classList.add("active");

      });

};

// Random Background Option
let backgroundOption = true;

//Varible To Control The Background Interval
let backgroundInterval;

//Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("backgroun_option");

//Check If Random Background Local Storage Is Not EMpty

if (backgroundLocalItem !== null) {



  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

  } else {

    backgroundOption = false;

  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
    
    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}

//Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");

}; 

// Switch Colors
const ColorsLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items
ColorsLi.forEach(li => {

  //Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    localStorage.setItem("color_option", e.target.dataset.color)

    //Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

      element.classList.remove("active");

    });

      //Add Active Class On Seif
      e.target.classList.add("active");

  });

});


 // Switch Random Background Option
const randomBackgroundsElement = document.querySelectorAll(".random-backgrounds span");

//Loop On All List Spans
randomBackgroundsElement.forEach(span => {

  //Click On Every Span
  span.addEventListener("click", (e) => {

    //Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

      element.classList.remove("active");

    });

      //Add Active Class On Seif
      e.target.classList.add("active");

     if(e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("backgroun_option", true);

     } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("backgroun_option", false);

     }

  });

});

//select landing page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imags
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      //Get Random Number
     let randomNumber = Math.floor(Math.random() * imgsArray.length);

  
     //Change Background Image Url
     landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
  
  
    }, 5000);

  }

}


randomizeImgs();


//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  //Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let SkillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + SkillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }



};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    //Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    //Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      //Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      //Append The Text To The Heading
      imgHeading.appendChild(imgText);

      //Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    //Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    //Creat The Close Button Text
    let closeButtonText = document.createTextNode("X");

    //Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'colse-button';

    //Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);


  });

});

//Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'colse-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();


    // Remove Ovarlay
    document.querySelector(".popup-overlay").remove();

  }

});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

  bullet.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'

    });

  });

});



// Select All Links
const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'

    });

  });

});


