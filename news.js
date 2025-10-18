const newsItems = [
{
  "date": "2025-10-11",
  "title": "Exploring Human–Robot Interaction at Sorbonne Université, Paris",
  "description": "After years of working with aerial robots, it is time for a new challenge on the ground. As part of the TREES (Transformative Robotics Ecosystem for Essential Services) project, I will work on floating base mobile robots, focusing on Human–Robot Interaction and will involve working with Mirokai (Enchanted Tools), an animalloid ballbot designed for smooth physical interaction with humans. I look forward to bringing my experience with aerial robotics to mobile platforms, where many of the fundamental challenges remain intriguingly similar. ",
  "image": "images/dario-mirokai.png",
  "link": "https://www.linkedin.com/feed/update/urn:li:activity:7382721134682710016/",
  "preferred": true
},
{
  "date": "2025-10-10",
  "title": "Serving as Associate Editor for ICUAS 2026",
  "description": "This year, I will be serving as an Associate Editor for the International Conference on Unmanned Aircraft Systems (ICUAS) 2026 which will be held at Corfu in Greece (June 15-18). It will be a pleasure to serve for this community which focuses on research and innovation for unmanned aerial vehicles.",
  "image": "images/icuas.png",
  "link": "https://uasconferences.com/2026_icuas/"
},
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
    date: "2024-08-01",
    title: "New Preprint: Agile and Cooperative Aerial Manipulation",
    description: "Our latest preprint on cooperative aerial manipulation of cable-suspended loads is now available on arXiv.",
    image: "images/basket.png",
    link: "https://arxiv.org/abs/2501.18802"
  },
  {
  "date": "2024-09-01",
  "title": "CASE 2024, Bari, Italy",
  "description": "Quite a busy and inspiring conference! I had the pleasure to chair a special session with my friend and colleague Enrico Ferrentino on 'Innovations in Robotics and Automation for Enhanced Healthcare'. I was also invited as a speaker at the second 'French-Italian Workshop on Robotics 4.0' to present my work on Aerial Cooperative Manipulation, and presented our paper 'Visual Feedback BCI for UAV Control Using Error-Related Negativity', a collaboration with the University of California San Diego (UCSD). New friends, talented people, and an amazing atmosphere.",
  "image": "images/case2024.jpeg",
  "link": "https://www.linkedin.com/posts/dario-sanalitro-42a9b4151_chair-invited-speaker-activity-7244002132352245761-orG_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSiFGIB5mLI0mpfQFw5RKL5OFakhyC1UaM"
  },
  {
    date: "2024-02-10",
    title: "Seminar — Advanced Aerial Cooperative Robotics at INRIA Rennes",
    description: "Delivered a seminar on cooperative aerial robotics",
    image: "images/rennes-talk.jpeg",
    link: "https://www.linkedin.com/posts/dario-sanalitro-42a9b4151_collaboration-multirobot-aerial-activity-7154715845703655424-4dg2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSiFGIB5mLI0mpfQFw5RKL5OFakhyC1UaM"
  }
];

function insertNews() {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  // 1. Sort preferred items first
  const sortedNews = [...newsItems].sort((a, b) => (b.preferred === true) - (a.preferred === true));

  // 2. Create cards
  sortedNews.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    if (item.preferred) card.classList.add("preferred");

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
