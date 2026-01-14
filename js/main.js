const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    imag: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    imag: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    imag: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    imag: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    imag: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    imag: "img/female3.png"
  }
];

const generateNewCard = ( singleMember ) => {
    const { name, role, email, imag } = singleMember;
    const newElement = document.createElement("div");
    newElement.classList.add("team-members");
    newElement.innerHTML = `
      <section class="box" >
        <div class="card-image">
        <img src="${imag}" alt=" photo of ${name}"> 
    </div>
    <div class="card-text">
        <h2>${name}</h2>
        <p>${role}</p>
        <a>${email}</a>
    </div>
    </section>`;
  
    return newElement;
}

function renderTeamPage ( teamMembers, wrapperId ){
    const wrapper = document.getElementById(wrapperId);

    for (let i = 0; i < teamMembers.length; i++) {
        const courentMember = teamMembers[i];
        wrapper.append(generateNewCard(courentMember));
    }
}

renderTeamPage (teamMembers, "Team-container");