function collapse_section() {

}

function getParent(className, element) {
    if (element.classList.contains(className)) {
        return element;
    } else {
        let parent = element.parentElement;
        return getParent(className, parent);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var infoboxes = document.getElementsByClassName("infobox__top");
    for (let i = 0; i < infoboxes.length; i++) {
        infoboxes[i].addEventListener("click", function(e) {
            let infobox_top_proper = getParent("infobox__top", e.target);
            let infobox_content = infobox_top_proper.nextElementSibling;
            infobox_content.classList.toggle("d-none");
        });
    }
});