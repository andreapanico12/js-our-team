const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamBox = document.getElementById("team-box");


teamBox.innerHTML=cardsStamp(teamMembers)








// funzioni


// Funzione 1: servirà a ciclare il nostro array di oggetti  per poi creare le card e concatenarle tra loro e poi inserirle nell'index.


function cardsStamp(array){
  let cards= ``;
  for(let element of array){
    cards += cardGen(element)
  }
  return cards
}


// Funzione 2

function cardGen(member){
  const{name,role,email,img} = member;
  return `<div class="col">
            <div class="member-card border m-2 d-flex ">
              <div class="card-image flex-shrink-0 border"><img src="assets/${img}" alt=""></div>
              <div class="card-text flex-grow-1 ps-4 pt-2">
                <h2 class="name fw-bold fs-4 text-light">${name.toUpperCase()}</h2>
               <p class="role fs-5 text-light m-0">${role}</p>
                <p class="email fs-5 mt-2 ">${email}</p>
            </div>
          </div>
        </div>`
}

