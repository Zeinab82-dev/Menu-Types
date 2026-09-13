

const showMenuButton = document.querySelectorAll(".btn");
const active = document.querySelectorAll(".active");
const main = document.querySelector("main");
const bgImg = document.querySelector(".bg-img");
const menuButton = document.querySelectorAll(".menu-btn");

// <<< Select menu grid elements >>>
const gridMenuButton = document.querySelector(".grid-menu-btn");
const gridMenu = document.querySelector("#grid-menu");
const gridMenuCloseButton = document.querySelector(".grid-close-btn");

// <<< Select menu side elements >>>
const sideMenuButton = document.querySelector(".side-menu-btn");
const sideMenu = document.querySelector("#side-menu");
const sideMenuCloseButton = document.querySelector(".side-close-btn");


const images = [];

for (let i = 1; i <= 12; i++) {
    const img = new Image();
    img.src = `./assets/images/background-img-${i}.jpeg`;
    images.push(img);
}





showMenuButton.forEach((button) => {
    button.addEventListener("click", () => {
        let random = Math.trunc(Math.random() * 12) + 1;
        
        bgImg.style.opacity = "0";
        setTimeout(() => {
            bgImg.src = `./assets/images/background-img-${random}.jpeg`;
            bgImg.style.opacity = "1";
        },50);
        

        showMenuButton.forEach((btn) => {
            btn.style.opacity = "0.7";
            btn.classList.remove("button-active");
            btn.querySelector(".active").classList.remove("active-button");
        });
        button.style.opacity = "1";
        button.classList.add("button-active");
        button.querySelector(".active").classList.add("active-button");

        menuButton.forEach((icon) => {
            
            if (button.className.includes("grid-menu") && icon.className.includes("grid-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("side-menu") && icon.className.includes("side-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("tab-menu") && icon.className.includes("tab-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("fab-menu") && icon.className.includes("fab-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("sheet-menu") && icon.className.includes("sheet-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("dot-menu") && icon.className.includes("dot-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("rectangular-menu") && icon.className.includes("rectangular-menu")) {
                icon.classList.add("display-menu");
            }
            else if (button.className.includes("rudder-menu") && icon.className.includes("rudder-menu")) {
                icon.classList.add("display-menu");
            }
            else {
                
                icon.classList.remove("display-menu");
                
            }
        });
    });
});





// <<< Open grid menu >>>
gridMenuButton.addEventListener("click", () => {
    gridMenu.classList.add("open-grid-menu");
    
});

// <<< Close grid menu >>>
gridMenuCloseButton.addEventListener("click", () => {
    gridMenu.classList.remove("open-grid-menu");
    
});



// <<< Open side menu >>>
sideMenuButton.addEventListener("click", () => {
    sideMenu.classList.add("left-0");
    setTimeout(() => {
        sideMenu.classList.add("bg-black/30","backdrop-blur-[8px]");
    },400);
});

// <<< Close side menu >>>
sideMenuCloseButton.addEventListener("click", () => {
    sideMenu.classList.remove("bg-black/30","backdrop-blur-[8px]");
    setTimeout(() => {
        sideMenu.classList.remove("left-0");
    },200);
});
