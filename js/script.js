// Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
// Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.



const members = [
  {
    firstname: 'Wayne',
    lastname : 'Barnett',
    role: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    firstname: 'Angela',
    lastname : 'Caroll',
    role: 'Chief & Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },
  {
    firstname: 'Walter',
    lastname : 'Gordon',
    role: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    firstname: 'Angela',
    lastname : 'Lopez',
    role: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    firstname: 'Scott',
    lastname : 'Estrada',
    role: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    firstname: 'Barbara',
    lastname : 'Ramos',
    role: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
];

createTeam();

function createTeam(){

  // for(let teamMembers of team)

  for(let i in members){
    const cards =
    `
    <div class="team-card">
              <div class="card-image">
                <img
                  src="img/${members[i].foto}"
                  alt="${members[i].firstname} ${members[i].lastname}"
                />
              </div>
              <div class="card-text">
                <h3>${members[i].firstname} ${members[i].lastname}</h3>
                <p>${members[i].role}</p>
              </div>
            </div>
    `
    document.querySelector('.team-container').innerHTML += cards;
  }
}
// Genero le mie card 


//Tutto dal click sul pulsante


document.getElementById('addMemberButton').addEventListener('click', addmember);

function addmember(){

  const insertName = document.getElementById('name').value;
  const insertRole = document.getElementById('role').value;
  const insertImage = document.getElementById('image').value;
  // console.log(insertName);
  
  const input = document.querySelector("input");
  validateForm(input);
  

  // creo un nuovo membro/card grazie alle informazioni ricevute dagli input

  let createExtraCard = 
  `
  <div class="team-card">
            <div class="card-image">
              <img
                src="img/${insertImage}"
                alt="" 
              />

            </div>
            <div class="card-text">
              <h3>${insertName}</h3>
              <p>${insertRole}</p>
            </div>
          </div>
  `;
  document.querySelector('.team-container').innerHTML += createExtraCard;
  
  reset();
}


//comfermo se input siano compilati

function validateForm(input) {

  if (input.value.trim().length === 0) {
    alert('Compilare almeno nome e ruolo');
    createExtraCard.classList.add('hide');
  }
}

function reset(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}