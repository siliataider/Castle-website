// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//modifier la section visites
document.getElementById("visites").style.color="blue";


// template

let template = document.querySelector("#listeactus");

for (const d of actus) {					
    let clone = document.importNode(template.content, true);     

    newContent = clone.firstElementChild.innerHTML					
        .replace(/{{}}/g, d.image)
        .replace(/{{}}/g, d.titre)				
        .replace(/{{}}/g, d.bouton)

        clone.firstElementChild.innerHTML = newContent

     
        clone.firstElementChild.firstElementChild.style.backgroundImage="url('"+d.image+"')",		
        
    document.body.appendChild(clone);
    
    
}