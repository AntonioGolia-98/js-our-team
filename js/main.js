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

const generateNewCard = ( singleMember ) => {
    const { name, role, email, img} = singleMember;
    const newElement = document.createElement("div");
    newElement.classList.add("team-members");
    newElement.innerHTML = `
        <div class="card-image">
        <img src="./img/${Img}" alt=" photo of ${name}"> 
    </div>
    <div class="card-text">
        <h2>${name}</h2>
        <p>${role}</p>
        <p>${email}</p>
    </div>`;
    return newElement;
}