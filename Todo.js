

let taches = [];

function newTache(titleParam){
    let newTache = {
        id: taches.length + 1,
        title: titleParam,
        finish:false,
    };
    return newTache;
}

let buttonAdd = document.getElementById('newTache');
buttonAdd.addEventListener('submit', ajouter);//ecouter le formulaire et ajouter une nouvelle tache;

//fonction ajouter 

function ajouter(event){
    event.preventDefault();
    let titre = document.getElementById('titleTache').value.trim();

    if(titre === ""){
        alert('Donner un titre a votre tache');
    }else{
       let tache = newTache(titre);
        taches.push(tache);
        afficher();
        document.getElementById('titleTache').value = "";
        
    }

    
}

//function d'afffichage

function afficher(){
  
 let ligne = document.querySelector('tbody'); // recupere une ligne du tableau
 ligne.textContent = "" //effece toutes les lignes du tableau 
taches.forEach(tache => { // pour pacourir le tableau tache par tache
    let linetable = document.createElement('tr');
    let celluleTitre = document.createElement('td');//cree une cellule pour tache
    let celluleStatut = document.createElement('td');//crre une cellule pour statut
    let celluleActions = document.createElement('td');//crre une cellule pour actions

    celluleTitre.textContent = tache.title; 
    celluleStatut.textContent = tache.finish;
    
    let buttonTerminer = document.createElement('button');//cree le bouton pour marquer une tache comme terminee
    let buttonSupprimer = document.createElement('button');//cree un bouton pour suppression d'une tache

    buttonTerminer.classList.add('termine');
    buttonSupprimer.classList.add('supprimer');

    buttonTerminer.textContent = "Terminer"
    buttonSupprimer.textContent = "Supprimer"
    ligne.appendChild(linetable);

    linetable.appendChild(celluleTitre);
    linetable.appendChild(celluleStatut);
    linetable.appendChild(celluleActions);

    celluleActions.appendChild(buttonTerminer);
    celluleActions.appendChild(buttonSupprimer);

    // modification du statutd'une tache

    if(tache.finish){
        celluleStatut.textContent = "Terminée";
    }else{
        celluleStatut.textContent = "En cours";
    }

    //gestion du clique sur le boutton termier

    buttonTerminer.addEventListener('click', ()=>{finish(tache.id);});
    //ici ()=> sert a retarder l'evenement pour que lq fonction finish soit interpretee.
    buttonSupprimer.addEventListener('click', ()=>{supprimer(tache.id);});



});
    
}

//fonction finish

function finish(id){
    let tacheTrouvee= taches.find(tache=>id === tache.id)
    tacheTrouvee.finish = true;
    afficher();
}

//fonction supprimer 
function supprimer(id){
    taches = taches.filter(tache=>tache.id !== id);
    afficher();
}




