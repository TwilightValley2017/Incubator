
window.onload = function() {
    // createElement();
    createElements();
};

function createElement() {
    if (!document.createElement) return false;
    if (!document.getElementById("testdiv")) return false;

    let element = document.createElement("p");
    let text = document.createTextNode("I`m here~");
    element.appendChild(text);
    let target = document.getElementById("testdiv");
    target.appendChild(element);

    // console.log("nodevalue=>", element.nodeValue);
    // console.log("nodeName=>", element.nodeName);
    // console.log("nodeType=>", element.nodeType);
}

function createElements() {
    if (!document.createElement) return false;
    if (!document.getElementById("testdiv")) return false;

    let textleft = document.createTextNode("left");
    let textright = document.createTextNode("right");

    let element = document.createElement("em");
    let content = document.createTextNode("middle");
    element.appendChild(content);

    let target = document.getElementById("testdiv");
    target.appendChild(textleft);
    target.appendChild(element);
    target.appendChild(textright);

}



