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
//document.getElementById("visites").style.color="blue";


// template

let actus = 
  [
    {
        titre: "Soutenez le château",
        texte: "Avec la crise sanitaire, la fréquentation a chuté de 80%. Aidez le Château en faisant un don en ligne.",
        image: "monalisa",
        bouton : "Je fais un don"
    },
    {
        titre: "Féérie des eaux",
        texte: "Venez assister à notre féérie des eaux nocturne, un spectacle son et lumière qui ravira les petits et les grands.",
        image: "feu-artifice",
        bouton : "Plus d'informations"
    },
    {
        titre: "Exposition de peinture",
        texte: "Les plus grands maîtres de la peinture classique s'invitent au Château pour une exposition temporaire exceptionnelle.",
        image: "peinture",
        bouton : "Billetterie"
    }
];

let template = document.querySelector("#listeactus");

for (const d of actus) {	

    let clone = document.importNode(template.content, true);     
    newContent = clone.firstElementChild.innerHTML					
        .replace(/{{image}}/g, d.image)
        .replace(/{{titre}}/g, d.titre)
        .replace(/{{texte}}/g, d.texte)				
        .replace(/{{bouton}}/g, d.bouton)

        clone.firstElementChild.innerHTML = newContent
     
        //clone.firstElementChild.firstElementChild.style.backgroundImage="url('"+d.image+"')",	
        //clone.firstElementChild.firstElementChild.style.backgroundImage="images/"+d.image+".jpg",		
        
    document.body.appendChild(clone);
    
    
}
