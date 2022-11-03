

function toggleNav() {
    document.getElementById("navigation-main").classList.toggle("d-none");
    document.getElementById("navigation-main").classList.toggle("menu");
}

// The above needs to be changed because we don't want to shift the content to the left.
// We want all the content to appear above the current page.
// To do that, we need to style the content how we like with CSS/Bootstrap and set it to display: none. 
// To show it, we display: block. To hide, display: none again.