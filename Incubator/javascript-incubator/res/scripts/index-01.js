
window.onload = function() {
    countChildNodes();
    prepareGalley();
}

function countChildNodes() {
    let nodes = document.getElementsByTagName("body")[0].childNodes;
    let quantity = nodes.length;
    console.log(quantity);
    for (let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeType == 1) {
            console.log(i + "=>", nodes[i], "=>", nodes[i].nodeType);
        }
    }
}

function prepareGalley() {
    let supported = !document.getElementById || !document.getElementsByTagName;
    if (!supported) return false;
    if (!document.getElementById("imagegallery")) return false;

    let galley = document.getElementById("imagegallery");
    let links = galley.getElementsByTagName("a");
    for (let i=0; i<links.length; i++) {
        links[i].onclick = function() {
            showPics(this);
            return false;
        };
    }
}

function showPics(element) {
    let src = element.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", src);
    let title = element.getAttribute("title");
    let description = document.getElementById("description");
    description.firstChild.nodeValue = title;
}

