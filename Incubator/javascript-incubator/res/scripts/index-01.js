
function showPics (element) {
    let src = element.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", src);
}