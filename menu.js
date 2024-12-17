
function increaseFontSize(element) {
    element.style.fontSize = "1.5em";
}


function changeImage(button) {
    const card = button.closest(".card"); 
    const img = card.querySelector(".card-img-top"); 
    img.src = "istockphoto-1151872207-170667a.jpg"; 
}
