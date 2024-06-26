function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// JavaScript for PageView 
let currentIndex = 0;
let interval;

function showPage(index) {
    const items = document.getElementsByClassName('pageViewItem');
    const indicators = document.getElementsByClassName('indicator');
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
        items[i].classList.remove('active', 'prev', 'next');
        indicators[i].classList.remove('active');
    }
    items[currentIndex].style.display = 'block';
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');

    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    items[prevIndex].style.display = 'block';
    items[prevIndex].classList.add('prev');

    items[nextIndex].style.display = 'block';
    items[nextIndex].classList.add('next');
}


function nextPage() {
    stopAutoSlide(); // متوقف کردن شمارشگر
    showPage(currentIndex - 1);
    startAutoSlide(); // شروع مجدد شمارشگر
}

function prevPage() {
    stopAutoSlide(); // متوقف کردن شمارشگر
    showPage(currentIndex + 1);
    startAutoSlide(); // شروع مجدد شمارشگر
}

function startAutoSlide() {
    interval = setInterval(prevPage, 5000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

document.addEventListener('DOMContentLoaded', (event) => {
    showPage(currentIndex);
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // اضافه کردن کلاس activePage به آیتم منوی خانه
    document.querySelector('.appbarItem:first-child').classList.add('activePage');

    // سایر کدهای جاوااسکریپت
    showPage(currentIndex);
    startAutoSlide();
});



function openDropDown() {
    document.getElementById("dropdownContent").style.width = "200px";
}

function closeDropDown() {
    document.getElementById("dropdownContent").style.width = "0";
}

