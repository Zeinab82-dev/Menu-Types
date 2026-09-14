

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

// <<< Select menu Tab Bar elements >>>
const tabbarMenu = document.querySelector("#tabbar-menu");
const tabbarMenuItem = document.querySelectorAll(".tab-item");
const tabbarMenuIcon = document.querySelectorAll(".tab-svg");
const tabbarMenuItemHome = document.querySelector(".home");

// <<< Select menu FAB elements >>>
const fabMenuButton = document.querySelector(".fab-menu-btn");
const fabMenu = document.querySelector("#fab-menu");




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

        tabbarMenu.classList.remove("bottom-0");
        fabMenu.classList.remove("scale-y-100","bottom-24","opacity-100");
        
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
                tabbarMenuIcon.forEach((tIcon) => {
                    tIcon.classList.remove("tab-icon");
                });
                tabbarMenuItem.forEach((tItem) => {
                    tItem.classList.remove("tab-open");
                });
                tabbarMenuItemHome.classList.add("tab-open");
                tabbarMenuItemHome.querySelector(".tab-svg").classList.add("tab-icon");
                tabbarMenu.classList.add("bottom-0");
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

// <<< Tab Bar menu >>>
tabbarMenuItem.forEach((tabItem) => {
    tabbarMenuItemHome.classList.add("tab-open");
    tabbarMenuItemHome.querySelector(".tab-svg").classList.add("tab-icon");
    tabItem.addEventListener("click",() => {
        tabbarMenuItem.forEach((tbItem) => {
            tbItem.classList.remove("tab-open");
            tbItem.querySelector(".tab-svg").classList.remove("tab-icon");
        });
        tabItem.classList.add("tab-open");
        tabItem.querySelector(".tab-svg").classList.add("tab-icon");
    });
});


// <<< FAB menu >>>
fabMenuButton.addEventListener("click", () => {
    fabMenu.classList.toggle("scale-y-100");
    fabMenu.classList.toggle("bottom-24");
    fabMenu.classList.toggle("opacity-100");
});