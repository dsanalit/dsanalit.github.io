const newsItems = [
  {
    date: "2025-09-10",
    title: "Just Flying? Aerial vehicles have bigger plans",
    description: "Shaping the Marie Skłodowska-Curie proposal on Cooperative Aerial Mnaipulation under the INRIA Boost Mobility Program",
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
