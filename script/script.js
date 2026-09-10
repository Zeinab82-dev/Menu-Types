

const showMenuButton = document.querySelectorAll(".btn");
const main = document.querySelector("main");
const menuButton = document.querySelectorAll(".menu-btn");






showMenuButton.forEach((button) => {
    button.addEventListener("click", () => {
        let random = Math.trunc(Math.random() * 12) + 1;
        
        
        main.style.background = `url(/assets/images/background-img-${random}.jpeg)`;
    
        main.style.backgroundSize= "cover";
        main.style.backgroundRepeat= "no-repeat";
        main.style.backgroundPosition= "center";
        main.style.transition = "all 0.5s";

        showMenuButton.forEach((btn) => {
            btn.style.opacity = "0.5";
        });
        button.style.opacity = "1";
        
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