const testimonials = [
  {
    author: {
      name: "Gabriel Mwenyewe",
      image: "author-01.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui ad natus delectus, suscipit quos, dolorum vitae corrupti consequuntur molestias iste earum illum. Temporibus aliquam esse eius possimus, rerum soluta.",
    date: "20th June",
  },
  {
    author: {
      name: "Allan Mzangulu",
      image: "author-02.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui ad natus delectus, suscipit quos, dolorum vitae corrupti consequuntur molestias iste earum illum. Temporibus aliquam esse eius possimus, rerum soluta.",
    date: "12th June",
  },
  {
    author: {
      name: "Alvin Kababa",
      image: "author-03.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui ad natus delectus, suscipit quos, dolorum vitae corrupti consequuntur molestias iste earum illum. Temporibus aliquam esse eius possimus, rerum soluta.",
    date: "20th May",
  },
  {
    author: {
      name: "Huyo Msichana",
      image: "author-04.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui ad natus delectus, suscipit quos, dolorum vitae corrupti consequuntur molestias iste earum illum. Temporibus aliquam esse eius possimus, rerum soluta.",
    date: "14th feb",
  },
];

const container = document.getElementById("testimonials-container");

const makeTestimonialCard = (testimonial) => {
  return `<div class="testimonial-card">
    <img src="${testimonial.author.image}">
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date>Written on ${testimonial.date}</date>
    </div>`;
};

const updatePage = () => {
  let markup = makeTestimonialCard(testimonials[1]);

  container.innerHTML = markup;
};
updatePage();
