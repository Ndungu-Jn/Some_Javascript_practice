const dataArray = [
  {
    title: "Why do fingers get wrinkly in water?",
    detail:
      "Not because of absorbing water — but because your nervous system does it on purpose to improve grip (like tire treads).",
  },
  {
    title: "Can fish get thirsty?",
    detail:
      "Nope. Fish absorb water through their skin & gills (if freshwater). Saltwater fish actually 'drink' water to stay hydrated because salt dehydrates them.",
  },
  {
    title: "Why does your voice sound weird when recorded?",
    detail:
      " In real life, you hear your voice from inside your skull and through air → deeper & warmer. Mic only catches air version → higher & cringier lol.",
  },
  {
    title: "What are the best things about JavaScript?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque debitis aspernatur iusto molestias facilis itaque, perspiciatis tempore unde commodi eius. Distinctio ipsa numquam magni dolorum pariatur vel, explicabo accusantium?",
  },
];

const makeHTML = (data) => {
  return `<details> 
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`;
};

const container = document.getElementById("faq-container");

container.innerHTML = dataArray.map((data) => makeHTML(data)).join("");
