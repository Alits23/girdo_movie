function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
}

// بستن drop down هنگامی که کاربر کلیک خارج از آن می‌کند
document.addEventListener("click", function (event) {
    var dropdownContent = document.getElementById("dropdownContent");
    var dropdownButton = document.querySelector(".buttonProfile");
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
});

function openDropDown() {
    document.getElementById("dropdownContent").style.width = "200px";
}

function closeDropDown() {
    document.getElementById("dropdownContent").style.width = "0";
}
