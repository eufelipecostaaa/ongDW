const listaPosts = [
  {
    id: 1,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "./img/dog1.jpg",
  },
  {
    id: 2,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "./img/dog2.webp",
  },
  {
    id: 3,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "./img/cat1.jpg",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "./img/dog3.jpg",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((post) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${post.imgURL} /> 
                <h2 class="card-titulo"> ${post.titulo} </h2>
                <p class="card-descricao"> ${post.descricao} </p>
                <a class="btn btn-primary card-botao" idAnimal="${post.id}">
                  ADOTAR
                </a>
            </div>
        `;
    container.innerHTML += card;
  });
};


window.onload = () => {
  criacaoPosts();

  card.forEach((card) => {
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });

    card.lastElementChild.addEventListener("click", (event) => {
      console.log("acessou");
    });

  });
};


