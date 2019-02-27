
window.onload = prepareElements;
function prepareElements() {
    if (!document.getElementsByTagName) return false;

    let elements = document.getElementsByTagName("a");
    for (let i=0; i<elements.length; i++) {
        if (elements[i].getAttribute("class") == "popup") {
            elements[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(href) {
    window.open(href, "popup");
}