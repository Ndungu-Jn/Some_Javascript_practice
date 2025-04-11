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

let currentTestimonial = 0;

const nextTestimonial = () => {
  if (currentTestimonial < testimonials.length - 1) currentTestimonial += 1;
  updatePage();
};
const prevTestimonial = () => {
  if (currentTestimonial > 0) currentTestimonial -= 1;
  updatePage();
};

const updatePage = () => {
  let markup = makeTestimonialCard(testimonials[currentTestimonial]);
  if (testimonials.length > 1) {
    markup += `<nav>
    <button onclick="prevTestimonial()">Previous</button>
    <button onclick="nextTestimonial()">Next</button>
    </nav>`;
  }
  container.innerHTML = markup;
};
updatePage();
