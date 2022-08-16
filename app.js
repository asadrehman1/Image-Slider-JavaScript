const imgs = document.querySelectorAll("img");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");

let count = 0;
leftArrow.addEventListener("click", () => {
    count--;
    if (count >= 0) {
        imgs.forEach((img) => {
            img.style.transform += "translateX(500px)";
            img.style.transition = "transform .6s ease"
        })
    }
    else {
        count = 0;
    }
})


rightArrow.addEventListener("click", () => {
    count++;
    imgs.forEach((img) => {
        if (count < imgs.length) {
            img.style.transform += "translateX(-500px)";
            img.style.transition = "transform .6s ease"
        }
        else {
            imgs.forEach((img, index) => {
                count = 0;
                if (index === 0) {
                    img.style.transform = "translateX(0)";
                }
                else {
                    img.style.transform = "translateX(500px)";
                }
            })
        }
    })
})

let myinterval = setInterval(() => {
    count++;
    imgs.forEach((img) => {
        if (count < imgs.length) {
            img.style.transform += "translateX(-500px)";
            img.style.transition = "transform .6s ease"
        }
        else {
            imgs.forEach((img, index) => {
                count = 0;
                if (index === 0) {
                    img.style.transform = "translateX(0)";
                }
                else {
                    img.style.transform = "translateX(500px)";
                }
            })
        }
    })
}, 3000)
