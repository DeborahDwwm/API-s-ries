const resultatRecherche = document.querySelector('.resultatRecherche');
const search =document.querySelector('.search');

async function afficheSerie (recherche) {
    resultatRecherche.innerHTML = ""
    const reponse = await fetch ("https://api.tvmaze.com/search/shows?q="+recherche);
    const resultat = await reponse.json();
    console.log(resultat);

    resultat.map ((resultat) => {
        let carte = document.createElement ('div');
        resultatRecherche.appendChild (carte);
        carte.className = "carte";
    
         //appeler l'image
         let affiche = document.createElement('img');
         affiche.src = resultat.show.image?resultat.show.image.medium:'https://dummyimage.com/300';
         carte.appendChild(affiche);
         
         //appeler le titre//
         let title = document.createElement ('h2');
         title.innerText = resultat.show.name;
         carte.appendChild(title);
    })
}

search.addEventListener ('keydown', (e) => {
if (e.code=== "Enter") {
    let recupSearch = document.getElementById("search");
    let recupSerie = recupSearch.value; 
    afficheSerie (recupSerie);
}
    
});




/*async function afficherFilms () {
    const reponse = await fetch ("https://api.npoint.io/b63dccb6f75ee23dcf45");
        const filmographie = await reponse.json();
        filmographie.films.map ((film) => {
            let carte = document.createElement ('div');
            cartesGeneral.appendChild (carte);
            carte.className = "carte";
            */