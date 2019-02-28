
window.onload = function() {
    preparePlaceholder();
}

function preparePlaceholder() {
    if (!document.createElement) return false;

    let img = document.createElement("img");
    img.setAttribute("id", "placeholder");
    img.setAttribute("src", "res/images/Placeholder.jpg");
    img.setAttribute("alt", "placeholder");

    let p = document.createElement("p");
    p.setAttribute("id", "description");

    let text = document.createTextNode("Choose an image");
    p.appendChild(text);

    // document.getElementsByTagName("body")[0].appendChild(img);
    // document.getElementsByTagName("body")[0].appendChild(p);

    let list = document.getElementById("imagegalley");
    list.parentNode.insertBefore(img, list);
    list.parentNode.insertBefore(p, list);
}

