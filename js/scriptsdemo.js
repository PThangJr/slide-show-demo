const buttons = document.querySelectorAll(".btn");
const btnPrev = document.querySelector(".btn--prev");
const btnNext = document.querySelector(".btn--next");
const slides = document.querySelectorAll(".image");
const listItems = document.querySelectorAll(".control");
// console.log(slides)

//Khởi tạo giá trị index
var index = 0;
// var currentIndex = index;
var nextIndex = index + 1;
var prevIndex = index - 1;
var statusButton = true;
//Xử lý sự kiện khi click vào nút Next Slide
const handleNextSlide = (e) => {
    if (statusButton) {
        var currentIndex = index;
        // slides[index].classList.remove("active-img");
        slides[index].classList.add("hide-slide-prev");
        listItems[index].classList.remove("active-ctrl")

        slides[index].addEventListener("webkitAnimationStart", (e) => {
            statusButton = false;
        })
        slides[index].addEventListener("webkitAnimationEnd", (e) => {
            // console.log("prevIndex " + index);
            statusButton = true;
            if (index === 0) {
                slides[slides.length - 1].classList.remove("active-img");
                slides[slides.length - 1].classList.remove("hide-slide-prev");
            }
            else {
                slides[index - 1].classList.remove("active-img");
                slides[index - 1].classList.remove("hide-slide-prev");
            }
        })
        index++;
        index = index > slides.length - 1 ? 0 : index;
        slides[index].classList.add("active-img");
        listItems[index].classList.add("active-ctrl")
        // console.log(index);
        const slideActive = document.querySelector(".image.active-img");
        slides[index].classList.add("show-next-slide");
        slides[index].addEventListener("webkitAnimationEnd", (e) => {
            slides[index].classList.remove("show-next-slide");
        })
        // console.log(slideActive);

    }
}
const handlePrevSlide = (e) => {
    if (statusButton) {
        // slides[index].classList.remove("active-img");
        slides[index].classList.add("hide-slide-next");
        listItems[index].classList.remove("active-ctrl")

        slides[index].addEventListener("webkitAnimationStart", (e) => {
            statusButton = false;
        })
        slides[index].addEventListener("webkitAnimationEnd", (e) => {
            // console.log("prevIndex " + index);
            statusButton = true;
            // console.log("current", index)
            if (index === slides.length - 1) {
                slides[0].classList.remove("active-img");
                slides[0].classList.remove("hide-slide-next");
            }
            else {
                slides[index + 1].classList.remove("active-img");
                slides[index + 1].classList.remove("hide-slide-next");
            }
        })
        index--;
        index = index < 0 ? 4 : index;
        slides[index].classList.add("active-img");
        listItems[index].classList.add("active-ctrl")
        // console.log(index);
        const slideActive = document.querySelector(".image.active-img");
        slides[index].classList.add("show-previous-slide");
        slides[index].addEventListener("webkitAnimationEnd", (e) => {
            slides[index].classList.remove("show-previous-slide");
        })
        // console.log(slideActive);

    }
}


for (let button of buttons) {
    button.addEventListener("click", (e) => {
        if (e.target.className.indexOf("btn--next") !== -1) {
            handleNextSlide(e);
        }
        if (e.target.className.indexOf("btn--prev") !== -1) {
            // console.log(e.target);
            handlePrevSlide(e);
        }

    })
}
console.log(listItems);
const listItemPrev = document.querySelector(".active-ctrl");
// console.log(listItemPrev)

var currentIndex;
var activeIndex;
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", (e) => {
        const listItemPrev = document.querySelector(".active-ctrl");
        // console.log(listItemPrev)
        var posPrevSlide = parseInt(listItemPrev.getAttribute("pos-slide"));
        currentIndex = posPrevSlide; 
        
        
        // console.log(parseInt(positionSlide))
        for(let i = 0; i < listItems.length; i ++ ) {
            listItems[i].classList.remove("active-ctrl");
        }
        listItems[i].classList.add("active-ctrl");

        index = i;
        activeIndex = i;
        // console.log(currentIndex, activeIndex);
        if (currentIndex < activeIndex) {
            // console.log("next");
            slides[currentIndex].classList.add("hide-slide-prev");
            slides[activeIndex].classList.add("show-next-slide")
            slides[activeIndex].classList.add("active-img")
            slides[activeIndex].addEventListener("webkitAnimationEnd", () => {
                slides[currentIndex].classList.remove("active-img")
                slides[currentIndex].classList.remove("hide-slide-prev")
                slides[activeIndex].classList.remove("show-next-slide")
            
            })
        }
        if (currentIndex > activeIndex) {
            // console.log(currentIndex, activeIndex);
            slides[activeIndex].classList.add("active-img")
            slides[activeIndex].classList.add("show-previous-slide");
            slides[currentIndex].classList.add("hide-slide-next");
            console.log("prev")
            slides[activeIndex].addEventListener("webkitAnimationEnd", () => {
                slides[currentIndex].classList.remove("active-img")
                slides[currentIndex].classList.remove("hide-slide-next")
                slides[activeIndex].classList.remove("show-previous-slide")
            
            })

        }
        // console.log(i);
        // console.log(currentIndex, activeIndex);
    })
}