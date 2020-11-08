const buttons = document.querySelectorAll(".btn");
const btnPrev = document.querySelector(".btn--prev");
const btnNext = document.querySelector(".btn--next");
const slides = document.querySelectorAll(".image");
const listItems = document.querySelectorAll(".control");
// console.log(slides)

//Khởi tạo giá trị index
var index = 0;
var statusRunSlide = true;
// var currentIndex = index;
var nextIndex = index + 1;
var prevIndex = index - 1;
var statusButton = true;
//Xử lý sự kiện khi click vào nút Next Slide
const nextSlide = () => {
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
const handleNextSlide = (e) => {
    statusRunSlide = false;
    if (!statusRunSlide){
        console.log("clear")
        clearInterval(runSlide);
     }
   nextSlide();
}
//Xử lý sự kiện khi click vào nút Prev Slide

const handlePrevSlide = (e) => {
    statusRunSlide = false;
    if (!statusRunSlide){
        console.log("clear")
        clearInterval(runSlide);
    }
    setTimeout(() => {
        statusRunSlide = true;
    },2000)
    // runSlide(statusRunSlide)
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
console.log(statusRunSlide)
 if (statusRunSlide) {
    var runSlide = setInterval(() => {
        nextSlide();
        if (!statusRunSlide) {
            clearInterval(runSlide);
        }
    }, 2000)
}


for (let button of buttons) {
    button.addEventListener("click", (e) => {
        if (e.target.className.indexOf("btn--next") !== -1) {
            handleNextSlide(e);
        }
        if (e.target.className.indexOf("btn--prev") !== -1) {
            // console.log(e.target);
            handlePrevSlide(e, runSlide);
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
        var posPrevSlide = parseInt(listItemPrev.getAttribute("pos-slide"));
        console.log(posPrevSlide)
        currentIndex = posPrevSlide;
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-ctrl")
        }
        listItems[i].classList.add("active-ctrl");
        activeIndex = i;
        slides[currentIndex].classList.remove("active-img");
        slides[activeIndex].classList.add("active-img");
        index = i;
    })
}