const newsItems = [
{
  "date": "2025-09-10",
  "title": "Marie Skłodowska-Curie Postdoctoral Fellowship Application",
  "description": "On September 10th, I finally submitted my Marie Skłodowska-Curie Postdoctoral Fellowship proposal on Cooperative Aerial Manipulation. It has been an intense and rewarding journey — from shaping the scientific vision to refining the details of impact, training, and implementation. This proposal reflects months of research, collaboration, and mentoring, made possible through the invaluable support of Dr. Marco Tognon (Inria), Prof. Nikolay Atanasov (UC San Diego), Chloé Roscouet (Inria), and many supportive friends and colleagues. I’m deeply grateful for their guidance and encouragement throughout this process.",
  "image": "images/submission.jpeg",
  "link": "https://www.linkedin.com/posts/dario-sanalitro-42a9b4151_cooperativeaerialmanipulation-msca-inria-activity-7342201503824121856-4bNP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSiFGIB5mLI0mpfQFw5RKL5OFakhyC1UaM"
},
{
  "date": "2025-07-09",
  "title": "Conclusion of the Inria MSCA Hosting & Training Programme",
  "description": "On July 10th, 2025, I completed Inria’s MSCA Postdoctoral Fellowships Hosting & Training Programme. Over several months I engaged in rigorous training in proposal writing, grant development, and participated in one-on-one review sessions with two European partnerships and innovation projects managers, Matthieu Py and Paolo Simonelli. This preparation will be instrumental for submitting my Marie Skłodowska-Curie proposal. The program also offered a unique opportunity to exchange ideas with colleagues and other highly competitive researchers from diverse disciplines, fostering collaboration and peer learning. ",
  "image": "images/inriatraining.jpg",
  "link": "https://www.inria.fr/en/marie-sklodowska-curie-actions-postdoctoral-fellowships-2025-inria-hosting-offers-training"
},
 
  {
    date: "2025-06-10",
    title: "Just Flying? Aerial vehicles have bigger plans",
    description: "Shaping the Marie Skłodowska-Curie proposal on Cooperative Aerial Manipulation under the INRIA Boost Mobility Program",
    image: "images/msca.jpeg",
    link: "https://www.linkedin.com/posts/dario-sanalitro-42a9b4151_cooperativeaerialmanipulation-msca-inria-activity-7342201503824121856-4bNP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSiFGIB5mLI0mpfQFw5RKL5OFakhyC1UaM"
  },
  {
    date: "2025-08-01",
    title: "New Preprint: Agile and Cooperative Aerial Manipulation",
    description: "Our latest preprint on cooperative aerial manipulation of cable-suspended loads is now available on arXiv.",
    image: "images/basket.png",
    link: "https://arxiv.org/abs/2501.18802"
  },
  {
    date: "2025-02-10",
    title: "Seminar — Advanced Aerial Cooperative Robotics at INRIA Rennes",
    description: "Delivered a seminar on cooperative aerial robotics",
    image: "images/rennes-talk.jpeg",
    link: "https://www.linkedin.com/posts/dario-sanalitro-42a9b4151_collaboration-multirobot-aerial-activity-7154715845703655424-4dg2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSiFGIB5mLI0mpfQFw5RKL5OFakhyC1UaM"
  }
];

function insertNews() {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";
  newsItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="news-content">
        <time datetime="${item.date}">${new Date(item.date).toLocaleDateString()}</time>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">Read more →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

window.addEventListener("load", insertNews);
