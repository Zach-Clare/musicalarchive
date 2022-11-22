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
            // collapse the section
            let infobox_top_proper = getParent("infobox__top", e.target);
            let infobox_content_wrapper = infobox_top_proper.nextElementSibling;
            // infobox_content_wrapper.classList.toggle("d-none");

            // rotate arrow
            let chevron = e.target.querySelector(".fa-chevron-right");
            // substitute one rotation class for the other
            chevron.classList.toggle("fa-rotate-270"); 
            chevron.classList.toggle("fa-rotate-90");

            // transition sliding
            if (infobox_content_wrapper.style.maxHeight !== "0px") {
                infobox_content_wrapper.style.maxHeight = "0px";
            } else {
                infobox_content_wrapper.style.maxHeight = infobox_content_wrapper.scrollHeight + "px";
            }
        });
    }
});